import classNames from "classnames";
import { useMemo, useState } from "react";
import { Line } from "react-chartjs-2";

import { CustomDate } from "../../services/progress/date.services";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Statistics",
    },
  },
};

export default function Statistics({ events }) {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => setVisibility((v) => !v);

  const reversedData = useMemo(() => [...events?.data].reverse(), [events]);

  const totalCalories = useMemo(
    () =>
      reversedData.reduce((acc, event) => {
        return (
          acc +
          event.meals.reduce((iAcc, meal) => iAcc + Number(meal.calories), 0)
        );
      }, 0),
    [reversedData]
  );

  const totalMeals = useMemo(
    () =>
      reversedData.reduce((acc, event) => {
        return acc + event.meals.length;
      }, 0),
    [reversedData]
  );

  const averageWeight = useMemo(
    () =>
      (
        reversedData.reduce((acc, event) => {
          return acc + Number(event.weight.replace(",", "."));
        }, 0) / reversedData.length
      ).toFixed(2),
    [reversedData]
  );

  const weightData = useMemo(() => {
    const labels = reversedData?.map((e) => CustomDate.getDate(e.date));
    return {
      labels,
      datasets: [
        {
          label: "Weight",
          data: reversedData?.map(({ weight }) => weight.replace(",", ".")),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Calories",
          data: reversedData?.map(({ meals }) =>
            meals.reduce((acc, meal) => acc + Number(meal.calories), 0)
          ),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
          hidden: true,
        },
        {
          label: "Meals",
          data: reversedData?.map(({ meals }) => meals.length),
          borderColor: "rgb(80, 192, 192)",
          backgroundColor: "rgb(75, 192, 192)",
          hidden: true,
        },
      ],
    };
  }, [reversedData]);

  return (
    <div className="mb-8">
      <button
        type="button"
        className="flex border items-center text-sm px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
        onClick={toggleVisibility}
      >
        Statistics
        <svg
          className={classNames("h-4 w-4 ml-1", {
            "transform rotate-180": visibility,
          })}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {visibility && (
        <section>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <Line options={options} data={weightData} />
            </div>
            <div className="w-full md:w-1/2 lg:pl-8">
              <h2 className="text-2xl mt-8 mb-8">Monthly Report</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-md bg-red-200 text-red-600 flex flex-col p-4 justify-center items-center text-center">
                  Total Calories{" "}
                  <div className="text-2xl">{totalCalories} kcal</div>{" "}
                </div>
                <div className="rounded-md bg-blue-200 text-blue-600 flex flex-col p-4 justify-center items-center text-center">
                  Average Weight
                  <div className="text-2xl">{averageWeight} kg</div>
                </div>
                <div className="rounded-md bg-yellow-200 text-yellow-600 flex flex-col p-4 justify-center items-center text-center">
                  Total Meals
                  <div className="text-2xl">{totalMeals}</div>
                </div>
                <div className="rounded-md bg-indigo-200 text-indigo-600 flex flex-col p-4 justify-center items-center text-center">
                  Tracked
                  <div className="text-2xl">{reversedData?.length} days</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
