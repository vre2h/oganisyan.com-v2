import { useEffect, useState } from "react";
import { isServer } from "../helpers/helpers";

const initialState = {
  tasks: "",
  stopped: "",
  timeout: "",
  deadline: "",
};

export default function Meeting() {
  const [state, setState] = useState(initialState);
  const [isOpenBeautifulText, setIsOpenBeautifulText] = useState(false);

  const handleReset = () => {
    setState(initialState);
    if (!isServer()) {
      localStorage.removeItem("meeting");
    }
  };

  const handleChange = (e) => {
    setState((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleBeautifulTextViewer = () => {
    setIsOpenBeautifulText(!isOpenBeautifulText);
  };

  useEffect(() => {
    if (!isServer()) {
      localStorage.setItem("meeting", JSON.stringify(state));
    }
  }, [state.tasks, state.stopped, state.timeout, state.deadline, state]);

  useEffect(() => {
    if (!isServer()) {
      const syncedData = JSON.parse(localStorage.getItem("meeting"));

      if (syncedData) {
        setState(syncedData);
      }
    }
  }, []);

  return (
    <main className="max-w-sm sm:max-w-l md:max-w-2xl mx-auto my-8">
      <div className="mx-4">
        <header>
          <h1 className="text-2xl">Meeting checklist</h1>

          <section className="mt-4 flex">
            <button
              className="border hover:bg-gray-100 p-1 rounded cursor-pointer mr-2"
              onClick={handleReset}
            >
              🧻 clean all fields
            </button>

            <button
              className=" border hover:bg-gray-100 p-1 rounded cursor-pointer"
              onClick={toggleBeautifulTextViewer}
            >
              💅 {isOpenBeautifulText ? "hide" : "see"} beautiful text
            </button>
          </section>
        </header>
        {isOpenBeautifulText && (
          <section className="mt-8">
            <div className="border p-4">
              <header className="">
                <h2 className="text-2xl">Meeting Notes </h2>
                <span className="text-sm text-gray-400">
                  ({new Date().toUTCString()})
                </span>
                <br />
                <br />
              </header>

              <section className="mb-4">
                <h2 className="text-xl font-medium mb-2">Tasks to be done:</h2>
                {state.tasks.split("\n").map((t) => (
                  <>
                    <p key={t}>{t}</p>
                    <br />
                  </>
                ))}
              </section>
              <section className="mb-4">
                <h2 className="text-xl font-medium mb-2">Don't doing:</h2>
                {state.stopped.split("\n").map((t) => (
                  <>
                    <p key={t}>{t}</p>
                    <br />
                  </>
                ))}
              </section>
              <section className="mb-4">
                <h2 className="text-xl font-medium mb-2">Timeout:</h2>
                {state.timeout.split("\n").map((t) => (
                  <>
                    <p key={t}>{t}</p>
                    <br />
                  </>
                ))}
              </section>
              <section className="mb-4">
                <h2 className="text-xl font-medium mb-2">Deadline:</h2>
                {state.deadline.split("\n").map((t) => (
                  <>
                    <p key={t}>{t}</p>
                    <br />
                  </>
                ))}
              </section>
            </div>
          </section>
        )}
        <section className="max-w-sm sm:max-w-l md:max-w-2xl">
          <section className="my-8">
            <h2>Tasks to be done:</h2>
            <textarea
              value={state.tasks}
              onChange={handleChange}
              name="tasks"
              rows={3}
              cols={48}
              className="border p-1 w-full"
            />
          </section>

          <section className="my-8">
            <h2>Don't doing:</h2>
            <textarea
              value={state.stopped}
              onChange={handleChange}
              name="stopped"
              rows={3}
              cols={48}
              className="border p-1 w-full"
            />
            <p className=" text-sm text-gray-400">We decided not to do. </p>
          </section>

          <section className="my-8">
            <h2>Timeout:</h2>
            <textarea
              value={state.timeout}
              onChange={handleChange}
              name="timeout"
              rows={3}
              cols={48}
              className="border p-1 w-full"
            />
            <p className="text-sm text-gray-400">
              We are taking some time to think.
            </p>
          </section>

          <section className="my-8">
            <h2>Deadline (Action or next meeting):</h2>
            <textarea
              value={state.deadline}
              onChange={handleChange}
              name="deadline"
              rows={3}
              cols={48}
              className="border p-1 w-full"
            />
          </section>

          <p className="max-w-2xl p-4 rounded-md bg-blue-50">
            Rule of thumb: If you don’t know what happens <b>next</b>, the
            meeting was pointless.
            <ul className="ml-8 list-disc">
              <li>Ask for commitment or next steps</li>
            </ul>
          </p>
        </section>

        <section className="my-8 mt-16">
          <h3 className="text-lg">Coming features:</h3>
          <ul className="ml-8 list-disc">
            <li>Send to email/telegram</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
