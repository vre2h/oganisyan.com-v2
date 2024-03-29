import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NextLink from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import ColoredBar from "../components/ColoredBar";
import { Locales } from "../helpers/locale.helpers";
import useOutsideClick from "../lib/useOutsideClick";
import useWindowSize from "../lib/useWindowSize";

import { Burger, Close, ExternalIcon } from "./Icons";
import Footer from "./Footer";
import { CommonTranslations } from "../constants/i18n/translations";

const getLinks = (locale) => [
  {
    text: CommonTranslations[locale].blog,
    href: "/",
  },
  {
    text: CommonTranslations[locale].projects,
    href: "/projects",
  },
  {
    text: CommonTranslations[locale].talks,
    href: "/talks",
  },
  {
    text: CommonTranslations[locale].about,
    href: "/about",
  },
];

export default function Container({ children, pageUrl }) {
  const [mounted, setMounted] = useState(false);
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const { theme, setTheme } = useTheme();
  const [dropDown, showDropdown] = useState(false);
  const dropDownRef = useRef();
  const mobileMenuRef = useRef();
  const history = useRouter();

  const { locale } = history;

  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 640) {
      showDropdown(true);
    } else {
      showDropdown(false);
      setMenuVisibility(false);
    }
  }, [width]);

  const toggleMenuVisibility = () => setMenuVisibility((v) => !v);
  const toggleLibraryDropDown = () => {
    showDropdown((d) => !d);
  };

  const changeLang = (locale) => () => {
    history.push(history.asPath, history.asPath, { locale });
  };

  useOutsideClick(dropDownRef, () => {
    if (width > 648) {
      showDropdown(false);
    }
  });

  useOutsideClick(mobileMenuRef, () => {
    setMenuVisibility(false);
  });

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const hasTranslation =
    pageUrl.includes("how-to-learn-js") ||
    pageUrl.includes("home") ||
    pageUrl.includes("generation-2.0");

  const Menu = ({ classNames }) => {
    return (
      <div className={cn(classNames, "overflow-visible")}>
        {getLinks(locale).map(({ href, text }, idx) => {
          const isActiveLink =
            href === "/"
              ? history.pathname === href || history.pathname.includes("blog")
              : href === "/library"
              ? history.pathname === href ||
                history.pathname.includes("library")
              : history.pathname === href;

          return (
            <NextLink key={href} href={href}>
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
                <span
                  className={cn({
                    "transition-property-border-color duration-500 inline-block border-b-2 p-b-1 dark:border-gray-100 border-gray-900":
                      isActiveLink,
                  })}
                >
                  {text}
                </span>
              </a>
            </NextLink>
          );
        })}
        <span ref={dropDownRef} className="relative p-2 md:p-4">
          <span
            onClick={toggleLibraryDropDown}
            className={cn(
              "transition-property-border-color duration-500 my-2 text-base m:p-4 pb-1 sm:text-lg hover:text-gray-900 cursor-pointer",
              {
                "border-b-2 text-gray-900 border-gray-900 dark:text-gray-100":
                  history.pathname.includes("library"),
                "text-gray-900 text-opacity-30 dark:prose-dark dark:hover:text-gray-100":
                  !history.pathname.includes("library"),
              }
            )}
          >
            {CommonTranslations[locale].library}
          </span>
          {dropDown && (
            <div className="sm:shadow-2xl sm:absolute right-0 mt-2 py-2 w-32 w-full sm:w-48 sm:bg-white dark:bg-gray-700 sm:rounded-md sm:shadow-xl z-20">
              <Link locale={locale} href="/library/slides">
                <a
                  className="block px-4 py-2 dark:prose-dark text-sm capitalize text-gray-700
                hover:bg-gray-500 dark:hover:bg-white dark:hover:text-black hover:text-white"
                >
                  {CommonTranslations[locale].slides}
                </a>
              </Link>
              <Link locale={locale} href="/library/books">
                <a
                  className="block px-4 py-2 dark:prose-dark text-sm capitalize text-gray-700
                hover:bg-gray-500 dark:hover:bg-white dark:hover:text-black hover:text-white"
                >
                  {CommonTranslations[locale].books}
                </a>
              </Link>
              <a
                rel="noreferrer"
                href="https://letterboxd.com/vre2h"
                target="_blank"
                className="flex justify-between px-4 dark:prose-dark py-2 text-sm capitalize text-gray-700
                  hover:bg-gray-500 dark:hover:bg-white dark:hover:text-black hover:text-white"
              >
                {CommonTranslations[locale].movies}
                <ExternalIcon />
              </a>
              <a
                rel="noreferrer"
                href="https://myshows.me/m/Vrezh10"
                target="_blank"
                className="flex justify-between px-4 dark:prose-dark py-2 text-sm capitalize text-gray-700
                  hover:bg-gray-500 dark:hover:bg-white dark:hover:text-black hover:text-white"
              >
                {CommonTranslations[locale].tvShows}
                <ExternalIcon />
              </a>
            </div>
          )}
        </span>
      </div>
    );
  };

  return (
    <>
      {locale === Locales.am && !hasTranslation && (
        <ColoredBar>🇦🇲 Այս էջը դեռ թարգմանված չէ։</ColoredBar>
      )}
      <div
        className={cn("bg-white dark:bg-black py-2 px-8", {
          "px-4": locale === Locales.am,
          "px-8": locale === Locales.en,
        })}
      >
        <div
          className={cn(
            "flex justify-end items-center w-full mx-auto bg-white dark:bg-black",
            {
              "max-w-2xl": locale === Locales.am,
              "max-w-xl": locale === Locales.en,
            }
          )}
        >
          <a
            className={cn(
              "p-1 duration-300 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer",
              {
                "text-gray-900 dark:text-gray-100": locale === Locales.en,
                "text-opacity-40": locale !== Locales.en,
              }
            )}
            onClick={changeLang(Locales.en)}
          >
            en
          </a>
          <span className="dark:text-white">/</span>
          <a
            className={cn(
              "p-1 duration-300 pr-0 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer",
              {
                "text-gray-900 dark:text-gray-100": locale === Locales.am,
                "text-opacity-40": locale !== Locales.am,
              }
            )}
            onClick={changeLang(Locales.am)}
          >
            հայ
          </a>
        </div>
        <nav
          className={cn(
            "flex justify-between items-center w-full py-4 pt-2 pb-8 my-0 mx-auto bg-white dark:bg-black bg-opacity-60",
            {
              "max-w-2xl": locale === Locales.am,
              "max-w-xl": locale === Locales.en,
            }
          )}
        >
          <Menu classNames={cn("hidden sm:block")} />

          <div ref={mobileMenuRef}>
            <button
              onClick={toggleMenuVisibility}
              type="button"
              className="sm:hidden bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded p-2 h-10 w-10"
              aria-label="Open Main Menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuVisible ? <Close /> : <Burger />}
            </button>
            {isMenuVisible && (
              <Menu
                classNames={cn(
                  "flex flex-col z-30 rounded-lg shadow-md bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 overflow-hidden absolute top-0 inset-x-0 mt-24 mx-8 p-1 transition transform origin-top-right"
                )}
              />
            )}
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
        <main className="flex flex-col mx-auto w-full bg-white dark:bg-black min-h-screen">
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}

Container.defaultProps = {
  pageUrl: "",
};
