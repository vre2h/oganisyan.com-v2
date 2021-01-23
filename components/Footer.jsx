import Link from "next/link";

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
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      {/* <NowPlaying /> */}
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 grid-cols-2 sm:grid-cols-3">
        <div className="flex justify-start items-start transition flex-col space-y-4">
          <Link href="/">
            <a className="transition duration-500 text-sm text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="transition duration-500 text-sm text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900">
              About
            </a>
          </Link>
          <Link href="/projects">
            <a className="transition duration-500 text-sm text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900">
              Projects
            </a>
          </Link>
          <Link href="/uses">
            <a className="transition duration-500 text-sm text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900">
              Uses
            </a>
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
            Linkedin
          </ExternalLink>
        </div>
        <div className="flex items-start flex-col space-y-4">
          {/* <Link href="/uses">
            <a className="transition duration-500 text-sm text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900">
              Uses
            </a>
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
