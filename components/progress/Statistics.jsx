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

  const weightData = useMemo(() => {
    const reversedData = [...events?.data].reverse();
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
  }, [events?.data]);

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
        <div className="w-full md:w-1/2">
          <Line options={options} data={weightData} />
        </div>
      )}
    </div>
  );
}
