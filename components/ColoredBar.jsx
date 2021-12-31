import { useMemo } from "react";
import { colors } from "../constants/colors";

export default function ColoredBar({ children }) {
  const idx = useMemo(() => Math.floor(Math.random() * colors.length), []);

  return (
    <span
      style={{
        backgroundColor: colors[idx],
      }}
      className="py-1 inline-block text-sm text-center text-white px-1 mr-1 rounded-sm"
    >
      {children}
    </span>
  );
}
