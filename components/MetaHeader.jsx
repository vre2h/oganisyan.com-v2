import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";

const links = [
  {
    text: "Meeting",
    href: "/meeting",
  },
  {
    text: "1-1",
    href: "/1-1",
  },
  {
    text: "Estimation",
    href: "/estimation",
  },
];

export default function MetaHeader() {
  const { pathname, locale } = useRouter();

  return (
    <nav className="mb-8">
      {links.map(({ href, text }, idx) => {
        const isActiveLink = pathname === href;

        return (
          <Link key={href} locale={locale} href={href}>
            <a
              className={cn(
                "transition-property-border-color duration-500 p-2 text-base sm:p-4 sm:text-lg hover:text-gray-900",
                {
                  "text-gray-900 dark:text-gray-100": isActiveLink,
                  "text-gray-900 text-opacity-30 dark:prose-dark dark:hover:text-gray-100":
                    !isActiveLink,
                  "sm:pl-0": idx === 0,
                }
              )}
            >
              {text}
            </a>
          </Link>
        );
      })}
      <hr className="mt-4" />{" "}
    </nav>
  );
}
