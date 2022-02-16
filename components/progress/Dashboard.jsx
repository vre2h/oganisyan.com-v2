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

import {
  addEvent,
  getEventsByCondition,
} from "../../services/progress/events.services";
import { CustomDate } from "../../services/progress/date.services";
import { useAuthentication } from "../../hooks/useAuthentication.hooks";
import Card from "./Card";
import MetaHeader from "../MetaHeader";
import Loading from "../Loading";
import Statistics from "./Statistics";
import classNames from "classnames";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentMonthIdx = new Date().getMonth() + 1;
const getTwoDigitsMonthIdx = (idx) => (idx < 10 ? `0${idx}` : currentMonthIdx);

const year = new Date().getFullYear();

const getMonth = (idx) => ({
  activeMonthIdx: idx,
  twoDigitsMonthIdx: getTwoDigitsMonthIdx(idx),
});

export default function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState(getMonth(currentMonthIdx));
  const { user } = useAuthentication();
  const [events, setEvents] = useState({
    data: [],
    loading: true,
    error: "",
  });

  const loadEvents = () => {
    setEvents((events) => ({
      ...events,
      loading: true,
    }));
    return getEventsByCondition({
      startDate: {
        key: "date",
        condition: ">=",
        value: `${selectedMonth.twoDigitsMonthIdx}/01/${year}`,
      },
      endDate: {
        key: "date",
        condition: "<=",
        value: `${selectedMonth.twoDigitsMonthIdx}/31/${year}`,
      },
    })
      .then((e) => {
        setEvents((events) => ({
          ...events,
          loading: false,
          data: e,
        }));
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
        <p>Ahoy, {user.email}</p>
      </header>
      <section className="w-full overflow-scroll mb-4">
        Months:
        <div className="flex border-b">
          {months.map((month, index) => {
            const thisMonth = index + 1 === selectedMonth.activeMonthIdx;
            const futureMonth = index + 1 > currentMonthIdx;

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
                onClick={() => setSelectedMonth(getMonth(index + 1))}
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
          <Statistics events={events} />

          {selectedMonth.activeMonthIdx === currentMonthIdx && (
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
