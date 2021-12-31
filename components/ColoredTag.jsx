import { useMemo } from "react";
import { colors } from "../constants/colors";

export default function ColoredTag({ children }) {
  const idx = useMemo(() => Math.floor(Math.random() * colors.length), []);

  return (
    <span
      style={{
        backgroundColor: colors[idx],
      }}
      className="inline-block text-sm text-white px-1 mr-1 rounded-sm"
    >
      {children}
    </span>
  );
}
