import { useEffect } from "react";
import useSWR from "swr";
import format from "comma-number";

import fetcher from "../lib/fetcher";

export default function ViewCounter({ slug }) {
  const { data } = useSWR([`/api/views`, slug], fetcher);
  const views = data?.total;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views`, {
        method: "POST",
        body: JSON.stringify({ slug }),
      });

    registerView();
  }, [slug]);

  return `${views ? format(views) : "–––"} views`;
}
