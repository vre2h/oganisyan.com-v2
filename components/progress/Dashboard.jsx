import { useEffect, useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import classNames from "classnames";

import {
  addEvent,
  getEventsByCondition,
} from "../../services/progress/events.services";
import { CustomDate, months } from "../../services/progress/date.services";
import { useAuthentication } from "../../hooks/useAuthentication.hooks";
import Card from "./Card";
import MetaHeader from "../MetaHeader";
import Loading from "../Loading";
import Statistics from "./Statistics";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState(
    CustomDate.getMonthInfoByIdx(CustomDate.getCurrentMonthIdx())
  );
  const { signout } = useAuthentication();
  const [events, setEvents] = useState({
    data: [],
    loading: true,
    error: "",
  });
  const [weight, setWeight] = useState(null);

  const loadEvents = () => {
    setEvents((events) => ({
      ...events,
      loading: true,
    }));
    return getEventsByCondition({
      startDate: {
        key: "date",
        condition: ">=",
        value: CustomDate.getMonthRange(selectedMonth.twoDigitsMonthIdx).start,
      },
      endDate: {
        key: "date",
        condition: "<=",
        value: CustomDate.getMonthRange(selectedMonth.twoDigitsMonthIdx).end,
      },
    })
      .then((e) => {
        setEvents((events) => ({
          ...events,
          loading: false,
          data: e,
        }));
        setWeight(e[0].weight);
      })
      .catch((e) => {
        setEvents((events) => ({
          ...events,
          loading: false,
          error: e.message,
        }));
      });
  };

  useEffect(() => {
    loadEvents();
  }, [selectedMonth]);

  const saveEvent = (event) => {
    event.date = CustomDate.getStrictDate(event.date);

    addEvent(event).then(() => {
      loadEvents();
    });
  };

  const today = CustomDate.getStrictDate();
  const hasToday = events?.data[0]?.date === today;

  const defaultEvent = hasToday
    ? events.data[0]
    : {
        meals: [],
        date: new Date().toString(),
        workout: false,
        weight: "",
      };

  const filteredEvents = useMemo(() => {
    return events?.data?.filter((e) => e.date !== today);
  }, [events.data, today]);

  return (
    <div className="m-4">
      <MetaHeader />
      <header className="my-4 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          className="flex border items-center text-sm px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={signout}
        >
          Log Out
        </button>
      </header>
      <div className="mt-4 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="rounded-md bg-blue-200 text-blue-600 flex flex-col p-4 justify-center items-center text-center">
          Weight
          {weight ? <div className="text-2xl">{weight} kg</div> : "😈"}
        </div>
      </div>
      <Statistics events={events} />
      <section className="w-full overflow-scroll mb-8">
        <div className="flex border-b">
          {months.map((month, index) => {
            const thisMonth = index + 1 === selectedMonth.activeMonthIdx;
            const futureMonth = index + 1 > CustomDate.getCurrentMonthIdx();

            return (
              <button
                className={classNames(
                  "p-2 border-red-100 m-2 mb-0 cursor-pointer",
                  {
                    "border-b-2 border-red-500": thisMonth,
                    "text-gray-300 cursor-not-allowed": futureMonth,
                  }
                )}
                key={month}
                disabled={futureMonth}
                onClick={() =>
                  setSelectedMonth(CustomDate.getMonthInfoByIdx(index + 1))
                }
              >
                {month}
              </button>
            );
          })}
        </div>
      </section>
      {events.loading ? (
        <Loading style={{ height: "auto" }} />
      ) : (
        <div>
          {selectedMonth.activeMonthIdx === CustomDate.getCurrentMonthIdx() && (
            <section>
              <div className="mb-4">
                <Card onSave={saveEvent} {...defaultEvent} />
              </div>
              <hr className="mb-8" />
            </section>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredEvents.map((event) => {
              return (
                <div className="" key={event.date}>
                  <Card
                    onSave={saveEvent}
                    meals={event.meals}
                    weight={event.weight}
                    date={event.date}
                    workout={event.workout}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}{" "}
    </div>
  );
}
