import React from "react";

import { ProvideAuth } from "../../hooks/useAuthentication.hooks";

import ProgressApp from "./app";

export default function Progress() {
  return (
    <ProvideAuth>
      <div
        style={{
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <ProgressApp />
      </div>
    </ProvideAuth>
  );
}
