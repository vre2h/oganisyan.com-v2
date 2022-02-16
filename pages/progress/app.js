import React from "react";
import { useRouter } from "next/router";

import Dashboard from "../../components/progress/Dashboard";
import Login from "../../components/progress/Login";
import { Routes } from "../../constants/progress/routes";
import { useAuthentication } from "../../hooks/useAuthentication.hooks";
import Loading from "../../components/Loading";

export default function ProgressApp({}) {
  const { user } = useAuthentication();
  const { asPath } = useRouter();

  if (user === false) {
    return <Login />;
  }

  if (user === null) {
    return <Loading />;
  }

  if (asPath === Routes.login()) {
    return <Login />;
  }

  if (user || asPath === Routes.dashboard()) {
    return <Dashboard />;
  }

  return <Login />;
}
