import classNames from "classnames";
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
    date: CustomDate.getTime(new Date()),
    extra: false,
    notes: "",
  });

  const handleChange = (evt) => {
    if (evt.target.type === "checkbox") {
      setMeal((e) => ({
        ...e,
        [evt.target.name]: evt.target.checked,
      }));
      return;
    }

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
    <div className="mt-2 flex flex-col flex-wrap w-full md:w-2/3 bg-gray-50 p-2 rounded">
      <h3 className="text-xl mb-2">New meal</h3>
      <div className="w-full mb-2">
        <input
          onChange={handleChange}
          className="border p-1 mr-2 mb-1 w-20"
          placeholder="date"
          name="date"
          value={meal["date"]}
        />
        <input
          onChange={handleChange}
          className="border p-1 mr-2 mb-1 w-10"
          placeholder="cal"
          name="calories"
          value={meal["calories"]}
        />
        <label name="extra">
          <input
            type="checkbox"
            onClick={handleChange}
            className="cursor-pointer"
            value={!meal.extra}
            name="extra"
          />
          <span className="ml-1 ">Extra</span>
        </label>
      </div>

      <div className="w-full mb-2">
        <input
          onChange={handleChange}
          className="border p-1 mr-2 mb-1 w-full"
          placeholder="food"
          name="food"
          value={meal["food"]}
        />
      </div>

      <div className="w-full mb-2">
        <input
          onChange={handleChange}
          className="border p-1 mr-2 mb-1 w-full"
          placeholder="notes"
          name="notes"
          value={meal["notes"]}
        />
      </div>

      <span
        onClick={handleSave}
        className="text-center cursor-pointer p-2 rounded-md font-medium text-gray-900 dark:text-gray-100 bg-gray-100 hover:bg-gray-200 duration-200"
      >
        Add Meal
      </span>
    </div>
  );
};

export default function Card(props) {
  const { onSave, ...defaultEvent } = props;
  const [status, setStatus] = useState(statuses.idle);
  const [event, setEvent] = useState(defaultEvent);
  const [addMealFormStatus, setAddMealFormStatus] = useState(statuses.idle);

  const toggleStatus = () =>
    setStatus(status === statuses.editing ? statuses.idle : statuses.editing);
  const toggleAddMealFormVisibility = () =>
    setAddMealFormStatus(
      status === statuses.editing ? statuses.idle : statuses.editing
    );

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
  const isAddingMeal = addMealFormStatus === statuses.editing;

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
              className="rounded p-2 cursor-pointer text-gray-900 dark:text-gray-100 bg-gray-100 hover:bg-gray-200 duration-200"
            >
              Save
            </span>
          </div>
        ) : (
          <div className="ml-auto">
            <span
              onClick={toggleAddMealFormVisibility}
              className="ml-auto mr-2 cursor-pointer p-2 rounded-md font-medium text-gray-900 dark:text-gray-100 bg-gray-100 hover:bg-gray-200 duration-200"
            >
              Add 🥗
            </span>

            <span
              onClick={toggleStatus}
              className="ml-auto cursor-pointer p-2 rounded-md font-medium text-gray-900 dark:text-gray-100 bg-gray-100 hover:bg-gray-200 duration-200"
            >
              <div className="inline-block transform rotate-90">✏️</div>
            </span>
          </div>
        )}
      </div>

      <hr />

      <table className="my-4 p-l-4 w-full">
        {event.meals.map(({ date, calories, food, extra, notes }, idx) => (
          <div className="flex py-2 items-center" key={date}>
            {
              <div
                onClick={handleDeleteMeal(idx)}
                className="cursor-pointer mr-2"
              >
                ✖️
              </div>
            }
            <div className="text-gray-600">
              {food}{" "}
              <span className="bg-gray-100 rounded text-gray-600 text-xs p-1">
                {calories} cal
              </span>
              <div className={classNames("text-gray-500 text-xs ")}>
                <span
                  className={classNames("w-22", {
                    "text-blue-300": extra,
                  })}
                >
                  {extra ? "🙆🏻" : "🕧"} {date}
                </span>
                {notes && " / "}
                <span>{notes}</span>
              </div>
            </div>
          </div>
        ))}
      </table>

      <div className="mb-2">
        {isAddingMeal && <AddMealForm onSave={handleSaveMeal} />}
      </div>

      <hr />

      <div className="flex flex-wrap items-center mt-4">
        {isEditing ? (
          <label>
            <span className="mr-2">Weight:</span>
            <input
              placeholder="Weight"
              className="border p-1 w-20"
              name="weight"
              onChange={handleChange}
              value={event.weight}
            />
          </label>
        ) : (
          <span className="bg-blue-200 text-blue-800 text-xs mb-1 px-2 inline-block rounded-full mr-1 uppercase font-semibold tracking-wide">
            {event.weight} kg
          </span>
        )}
        {!isEditing && (
          <span className="bg-blue-100 text-blue-600 text-xs mb-1 px-2 inline-block rounded-full mr-1 uppercase font-semibold tracking-wide">
            {totalCalories} kcal
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
