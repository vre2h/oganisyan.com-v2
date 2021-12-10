import { useMemo } from "react";

const colors = ["#ffe27b", "#ffc98a", "#c3f9b2", "#b0d9ff"];

export default function ColoredTag({ children }) {
  const idx = useMemo(() => Math.floor(Math.random() * 4), []);

  return (
    <span
      style={{
        backgroundColor: colors[idx],
        marginRight: 3,
        borderRadius: 5,
        padding: "0px 5px",
        color: "white",
      }}
    >
      {children}
    </span>
  );
}
