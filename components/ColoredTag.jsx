import { useMemo } from "react";

const colors = [
  "#ffe27b",
  "#ffc98a",
  "#c3f9b2",
  "#b0d9ff",
  "#ec4899",
  "rgb(187, 247, 208)",
  "rgb(254, 240, 138)",
  "rgb(134, 239, 172)",
  "rgb(153, 246, 228)",
  "rgb(103, 232, 249)",
  "rgb(147, 197, 253)",
  "rgb(167, 139, 250)",
  "rgb(251, 207, 232)",
  "rgb(192, 132, 252)",
];

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
