import format from "comma-number";
import { useEffect } from "react";
import useSWR from "swr";

import fetcher from "../lib/fetcher";

export default function ViewCounter({ slug, postfix }) {
  const { data } = useSWR(`/api/views?slug=${slug}`, fetcher);
  const views = data?.total;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views`, {
        method: "POST",
        body: JSON.stringify({ slug }),
      });

    registerView();
  }, [slug]);

  return `${
    views && views > 2 ? `${views > 300 ? "🔥" : ""} ${format(views)}` : "–––"
  } ${postfix.toLowerCase()}`;
}
