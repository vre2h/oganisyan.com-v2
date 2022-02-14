import { useMemo, useState } from "react";
import { CustomDate } from "../../services/progress/date.services";

const statuses = {
  idle: "idle",
  editing: "editing",
};

const AddMealForm = ({ onSave }) => {
  const [meal, setMeal] = useState({});

  const handleChange = (evt) => {
    setMeal((m) => ({
      ...m,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <div className="mt-2">
      <input
        onChange={handleChange}
        className="border p-1 mr-2 mb-1"
        placeholder="food"
        name="food"
        value={meal["food"]}
      />
      <input
        onChange={handleChange}
        className="border p-1 mr-2 mb-1 w-20"
        placeholder="calories"
        name="calories"
        value={meal["calories"]}
      />
      <input
        onChange={handleChange}
        className="border p-1 mr-2 mb-1"
        placeholder="date"
        name="date"
        value={meal["date"]}
      />
      <span
        onClick={() => onSave(meal)}
        className="cursor-pointer hover:underline"
      >
        Save
      </span>
    </div>
  );
};

export default function Card(props) {
  const { onSave, ...defaultEvent } = props;
  const [status, setStatus] = useState(statuses.idle);
  const [event, setEvent] = useState(defaultEvent);
  const toggleStatus = () =>
    setStatus(status === statuses.editing ? statuses.idle : statuses.editing);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setEvent((e) => ({
        ...e,
        [name]: checked,
      }));
      return;
    }

    setEvent((e) => ({
      ...e,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(event);
    toggleStatus();
  };

  const handleSaveMeal = (meal) => {
    setEvent((e) => ({
      ...e,
      meals: e.meals.concat(meal),
    }));
    onSave(event);
  };

  const handleDeleteMeal = (idx) => () => {
    setEvent((e) => ({
      ...e,
      meals: e.meals.filter((_, iIdx) => iIdx !== idx),
    }));
    onSave(event);
  };

  const isEditing = status === statuses.editing;

  const totalCalories = useMemo(() => {
    return event.meals.reduce((acc, meal) => acc + Number(meal.calories), 0);
  }, [event.meals]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex">
        {isEditing ? (
          <input
            placeholder="Date"
            className="border p-1"
            value={event.date}
            onChange={handleChange}
            name="date"
          />
        ) : (
          <span className="font-semibold" name="date">
            {CustomDate.getDate(event.date)}
          </span>
        )}
        {isEditing ? (
          <div className="ml-auto">
            <span
              onClick={handleSave}
              className="hover:underline cursor-pointer"
            >
              Save
            </span>
          </div>
        ) : (
          <span onClick={toggleStatus} className="ml-auto cursor-pointer">
            ✏️
          </span>
        )}
      </div>

      <ul className="mt-1 p-l-4">
        {event.meals.map(({ date, calories, food }, idx) => (
          <li key={date}>
            <span>{food} — </span>
            <span name="calories" className="text-gray-600 text-sm">
              {calories} kcal
            </span>{" "}
            / <span className="text-gray-500 text-sm">{date}</span>{" "}
            {isEditing && (
              <span onClick={handleDeleteMeal(idx)} className="cursor-pointer">
                🪓
              </span>
            )}
          </li>
        ))}
        {isEditing && <AddMealForm onSave={handleSaveMeal} />}
      </ul>

      <div className="flex flex-wrap items-center mt-4">
        {isEditing ? (
          <input
            placeholder="Weight"
            className="border p-1"
            name="weight"
            onChange={handleChange}
            value={event.weight}
          />
        ) : (
          <span className="bg-blue-200 text-blue-800 text-xs px-2 inline-block rounded-full mr-1 uppercase font-semibold tracking-wide">
            {event.weight} kg
          </span>
        )}
        {!isEditing && (
          <span className="bg-blue-100 text-blue-600 text-xs px-2 inline-block rounded-full mr-1 uppercase font-semibold tracking-wide">
            {event.meals.length} meals / {totalCalories} kcal
          </span>
        )}
        {!isEditing ? (
          event.workout && (
            <span className="bg-red-200 text-red-800 text-xs px-2 inline-block rounded-full mr-1 uppercase font-semibold tracking-wide">
              Workout
            </span>
          )
        ) : (
          <label className="ml-auto">
            <input
              className="border p-1"
              onChange={handleChange}
              value={!event.workout}
              type="checkbox"
              name="workout"
              defaultChecked={event.workout}
            />
            <span className="pl-2">Workout</span>
          </label>
        )}
      </div>
    </div>
  );
}
