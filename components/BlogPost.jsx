import Link from "next/link";
import formatNumber from "comma-number";
import { useRouter } from "next/router";
import useSWR from "swr";

import ColoredTag from "./ColoredTag";
import fetcher from "../lib/fetcher";
import { CommonTranslations } from "../constants/i18n/translations";
import { Locales } from "../helpers/locale.helpers";

const BlogPost = ({ title, summary, slug, date, tags }) => {
  const { data } = useSWR(`/api/views?slug=${slug}`, fetcher);
  const views = data?.total;
  const { locale } = useRouter();

  return (
    <Link locale={locale} href={`/blog/${slug}`}>
      <a className="w-full blog-post">
        <div className="mb-16 w-full">
          <div className="flex flex-col items-start sm:flex-row justify-between">
            <h4 className="inline-block transition duration-500 text-lg md:text-xl font-medium mb-2 text-gray-900 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-700">
              {title}
            </h4>
            <p className="text-gray-400 text-left text-sm sm:text-right hidden sm:block w-32 mb-4 sm:mb-0">
              {views ? `${views > 300 ? "🔥" : ""} ${views}` : "–––"}{" "}
              {CommonTranslations[locale].views.toLowerCase()}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
          <p className="text-gray-400 text-sm text-left mt-2 sm:mb-0">
            <span className="text-left">
              {CommonTranslations[locale].published}{" "}
              {new Intl.DateTimeFormat(
                locale === Locales.am ? "hy-AM" : locale,
                {
                  dateStyle: "long",
                }
              ).format(new Date(date))}
              <div className="hidden sm:inline-block">
                {tags && ` • `}{" "}
                {tags &&
                  tags
                    .split(", ")
                    .map((t) => <ColoredTag key={t}>{t}</ColoredTag>)}
              </div>
            </span>
            <span className="sm:hidden">
              {` • `}{" "}
              {views && views > 2
                ? `${views > 300 ? "🔥" : ""} ${formatNumber(views)}`
                : "–––"}{" "}
              {CommonTranslations[locale].views.toLowerCase()}
            </span>
          </p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
