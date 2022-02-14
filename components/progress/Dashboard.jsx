import { useEffect, useState } from "react";

import { addEvent, getEvents } from "../../services/progress/events.services";

import { useAuthentication } from "../../hooks/useAuthentication.hooks";
import Card from "./Card";

export default function Dashboard() {
  const { user } = useAuthentication();
  const [events, setEvents] = useState({
    data: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    getEvents()
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
  }, []);

  const saveEvent = (event) => {
    addEvent(event);
  };

  if (events.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4">
      <header className="my-4 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Ahoy, {user.email}</p>
      </header>

      <div className="mb-4">
        <h2>Today</h2>
        <Card
          onSave={saveEvent}
          {...{
            meals: [],
            date: new Date().toString(),
            workout: false,
            weight: "",
          }}
        />
      </div>

      <hr className="mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.data.map((event) => {
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
