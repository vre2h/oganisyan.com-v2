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

import { addEvent, getEvents } from "../../services/progress/events.services";
import { CustomDate } from "../../services/progress/date.services";
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
  const { user } = useAuthentication();
  const [events, setEvents] = useState({
    data: [],
    loading: true,
    error: "",
  });

  const loadEvents = () => {
    return getEvents()
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
          e: e.message,
        }));
      });
  };

  useEffect(() => {
    loadEvents();
  }, []);

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

  if (events.loading) {
    return <Loading />;
  }

  return (
    <div className="m-4">
      <MetaHeader />
      <header className="my-4 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Ahoy, {user.email}</p>
      </header>

      <Statistics events={events} />

      <div className="mb-4">
        <Card onSave={saveEvent} {...defaultEvent} />
      </div>

      <hr className="mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
  );
}
