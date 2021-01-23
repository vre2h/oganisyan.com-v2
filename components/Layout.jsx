import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

import Footer from "./Footer";

const links = [
  {
    text: "Blog",
    href: "/",
  },
  // {
  //   text: "Projects",
  //   href: "/projects",
  // },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Library",
    href: "/library",
  },
];

export default function Container({ children }) {
  const history = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-white dark:bg-black">
      <nav className="sticky-nav flex justify-between items-center max-w-3xl w-full p-4 py-8 sm:p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
        <div>
          {links.map(({ href, text }) => {
            const isActiveLink =
              href === "/"
                ? history.pathname === href || history.pathname.includes("blog")
                : href === "/library"
                ? history.pathname === href ||
                  history.pathname.includes("library")
                : history.pathname === href;

            return (
              <NextLink href={href}>
                <a
                  className={cn(
                    "transition duration-500 p-2 text-base sm:p-4 sm:text-lg hover:text-gray-900",
                    {
                      "text-gray-900 dark:text-gray-100": isActiveLink,
                      "text-gray-900 text-opacity-30 dark:text-gray-600 dark:hover:text-gray-100": !isActiveLink,
                    }
                  )}
                >
                  <span
                    className={cn({
                      "transition duration-500 inline-block border-b-2 p-b-1 dark:border-gray-100 border-gray-900": isActiveLink,
                    })}
                  >
                    {text}
                  </span>
                </a>
              </NextLink>
            );
          })}
        </div>

        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
      <main className="flex flex-col justify-center bg-white dark:bg-black px-8">
        {children}
        <Footer />
      </main>
    </div>
  );
}
