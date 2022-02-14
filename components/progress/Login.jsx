import React, { useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication.hooks";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const { signin } = useAuthentication();

  const handleSubmit = async () => {
    setLoading(true);

    await signin(email, pass)
      .then(() => {
        setPass("");
        setEmail("");
      })
      .catch((e) => {
        alert(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen mx-auto flex flex-col justify-center items-center">
      <h2 className="text-2xl font-medium mb-2">Login:</h2>

      <div className="flex flex-col w-full p-4 sm:w-3/4 md:w-1/3 md:p-0">
        <input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-1 w-full"
          placeholder="email"
        />
        <input
          label="Password"
          type="password"
          value={pass}
          style={{ margin: "10px 0" }}
          onChange={(e) => setPass(e.target.value)}
          className="border p-1 w-full"
          placeholder="password"
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            className="flex border items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200"
            type="submit"
            onClick={handleSubmit}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
