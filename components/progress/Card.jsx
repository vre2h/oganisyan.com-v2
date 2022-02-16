import { useMemo, useState } from "react";
import { CustomDate } from "../../services/progress/date.services";

const statuses = {
  idle: "idle",
  editing: "editing",
};

const AddMealForm = ({ onSave }) => {
  const [meal, setMeal] = useState({
    food: "",
    calories: "",
    date: "",
  });

  const handleChange = (evt) => {
    setMeal((m) => ({
      ...m,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSave = () => {
    onSave(meal);
    setMeal({
      food: "",
      calories: "",
      date: "",
    });
  };

  return (
    <div className="mt-2 flex flex-wrap items-center">
      <input
        onChange={handleChange}
        className="border p-1 mr-2 mb-1 w-20"
        placeholder="date"
        name="date"
        value={meal["date"]}
      />
      <input
        onChange={handleChange}
        className="border p-1 mr-2 mb-1"
        placeholder="food"
        name="food"
        value={meal["food"]}
      />
      <input
        onChange={handleChange}
        className="border p-1 mr-2 mb-1 w-10"
        placeholder="cal"
        name="calories"
        value={meal["calories"]}
      />
      <span onClick={handleSave} className="cursor-pointer">
        ➕
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
    setEvent((e) => {
      const updEvent = {
        ...e,
        meals: e.meals.concat(meal),
      };
      onSave(updEvent);
      return updEvent;
    });
  };

  const handleDeleteMeal = (idx) => () => {
    setEvent((e) => {
      const updEvent = {
        ...e,
        meals: e.meals.filter((_, iIdx) => iIdx !== idx),
      };

      onSave(updEvent);
      return updEvent;
    });
  };

  const isEditing = status === statuses.editing;

  const totalCalories = useMemo(() => {
    return event.meals.reduce((acc, meal) => acc + Number(meal.calories), 0);
  }, [event.meals]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex mb-4">
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
          <span
            onClick={toggleStatus}
            className="ml-auto cursor-pointer transform rotate-90"
          >
            {" "}
            ✏️
          </span>
        )}
      </div>

      <hr />

      <table className="my-4 p-l-4 w-full">
        {event.meals.map(({ date, calories, food }, idx) => (
          <tr className="py-2" key={date}>
            <td className="text-gray-500 text-sm w-20">🕧 {date}</td>{" "}
            <td className="text-gray-600">
              {food}{" "}
              <span className="bg-gray-100 rounded text-gray-600 text-xs p-1">
                {calories} cal
              </span>
            </td>
            {isEditing && (
              <td onClick={handleDeleteMeal(idx)} className="cursor-pointer">
                ✖️
              </td>
            )}
          </tr>
        ))}
      </table>

      <div className="mb-2">
        {isEditing && <AddMealForm onSave={handleSaveMeal} />}
      </div>

      <hr />

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
          <span className="bg-blue-200 text-blue-800 text-xs mb-1 px-2 inline-block rounded-full mr-1 uppercase font-semibold tracking-wide">
            {event.weight} kg
          </span>
        )}
        {!isEditing && (
          <span className="bg-blue-100 text-blue-600 text-xs mb-1 px-2 inline-block rounded-full mr-1 uppercase font-semibold tracking-wide">
            {event.meals.length} meals / {totalCalories} kcal
          </span>
        )}
        {!isEditing ? (
          event.workout && (
            <span className="bg-red-200 text-red-800 text-xs mb-1 px-2 inline-block rounded-full mr-1 uppercase font-semibold tracking-wide">
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
