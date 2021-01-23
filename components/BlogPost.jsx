import Link from "next/link";
import useSWR from "swr";
import formatNumber from "comma-number";

import fetcher from "../lib/fetcher";

const BlogPost = ({ title, summary, slug, date }) => {
  const { data } = useSWR(`/api/views?slug=${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full hover:">
        <div className="mb-16 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
              {`${views ? formatNumber(views) : "–––"} views`}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
