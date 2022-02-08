import { createRef, useEffect, useState } from "react";
import { isServer } from "../helpers/helpers";

const initialState = {
  tasks: "",
  stopped: "",
  timeout: "",
  deadline: "",
  title: "Meeting Notes | Blog",
};

export default function Meeting() {
  const ref = createRef();
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

  const handleFocus = (e) => {
    const val = e.target.value;
    e.target.value = "";
    e.target.value = val;
  };

  const toggleBeautifulTextViewer = () => {
    setIsOpenBeautifulText(!isOpenBeautifulText);
  };

  useEffect(() => {
    if (!isServer()) {
      const syncedData = JSON.parse(localStorage.getItem("meeting"));

      if (syncedData) {
        setState(syncedData);
      }
    }

    ref.current.focus();
  }, []);

  useEffect(() => {
    if (!isServer()) {
      localStorage.setItem("meeting", JSON.stringify(state));
    }
  }, [state.tasks, state.stopped, state.timeout, state.deadline, state]);

  return (
    <main className="w-full xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto my-8">
      <div className="mx-4">
        <header>
          <section className="mb-6 flex">
            <button
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l mr-2"
              onClick={handleReset}
            >
              🧻 clean all fields
            </button>

            <button
              className=" bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick={toggleBeautifulTextViewer}
            >
              💅 {isOpenBeautifulText ? "hide" : "see"} beautiful text
            </button>
          </section>
        </header>
        {isOpenBeautifulText && (
          <section className="my-8 rounded-lg bg-gray-50">
            <div className="p-4">
              <header className="">
                <h2 className="text-2xl">{state.title}</h2>
                <span className="text-sm text-gray-400">
                  ({new Date().toUTCString()})
                </span>
                <br />
                <br />
              </header>

              <section className="mb-4">
                <h2 className="text-xl font-medium mb-2">Tasks to be done:</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: state.tasks.replaceAll("\n", "<br />"),
                  }}
                />
              </section>
              <section className="mb-4">
                <h2 className="text-xl font-medium mb-2">Don't doing:</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: state.stopped.replaceAll("\n", "<br />"),
                  }}
                />
              </section>
              <section className="mb-4">
                <h2 className="text-xl font-medium mb-2">Timeout:</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: state.timeout.replaceAll("\n", "<br />"),
                  }}
                />
              </section>
              <section className="mb-4">
                <h2 className="text-xl font-medium mb-2">Deadline:</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: state.deadline.replaceAll("\n", "<br />"),
                  }}
                />
              </section>
            </div>
          </section>
        )}
        <section className="max-w-sm sm:max-w-xl md:max-w-2xl mt-8">
          <input
            value={state.title}
            name="title"
            onChange={handleChange}
            className="text-3xl border p-2 w-full"
            autoFocus="true"
            ref={ref}
            onFocus={handleFocus}
          />
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
      </div>
    </main>
  );
}
