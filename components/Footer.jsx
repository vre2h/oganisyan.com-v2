import Link from "next/link";
import { useRouter } from "next/router";

import BasicLink from "./BasicLink";

const ExternalLink = ({ href, children }) => (
  <a
    className="transition duration-500 text-sm text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  const { locale } = useRouter();

  return (
    <footer className="flex flex-col justify-center items-start max-w-xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      {/* <NowPlaying /> */}
      <div className="w-full max-w-xl grid grid-cols-1 gap-4 pb-16 grid-cols-2 sm:grid-cols-3">
        <div className="flex justify-start items-start transition flex-col space-y-4">
          <Link locale={locale} href="/" passHref>
            <BasicLink>Home</BasicLink>
          </Link>
          <Link locale={locale} href="/about" passHref>
            <BasicLink>About</BasicLink>
          </Link>
          <Link locale={locale} href="/projects" passHref>
            <BasicLink>Projects</BasicLink>
          </Link>
          <Link locale={locale} href="/uses" passHref>
            <BasicLink>Uses</BasicLink>
          </Link>
          <Link locale={locale} href="/rss.xml" passHref>
            <BasicLink>RSS</BasicLink>
          </Link>
        </div>
        <div className="flex items-start flex-col space-y-4">
          <ExternalLink href="https://twitter.com/vre2h">Twitter</ExternalLink>
          <ExternalLink href="https://github.com/vre2h">GitHub</ExternalLink>
          <ExternalLink href="https://t.me/oganisyancom">Telegram</ExternalLink>
          <ExternalLink href="https://facebook.com/vre2h">
            Facebook
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/vre2h">
            LinkedIn
          </ExternalLink>
        </div>
        <div className="flex items-start flex-col space-y-4">
          {/* <Link locale={locale} href="/uses">
<BasicLink>
              Uses
</BasicLink>
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
