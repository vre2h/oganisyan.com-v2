import Image from "next/image";
import avatarImg from "../assets/img/general/avatar.jpg";

const ExternalLink = ({ href, children }) => (
  <a
    className="transition duration-500 inline-block text-base font-medium text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Bio({ description, social, socialDivider }) {
  return (
    <div className="mb-4 mt-4">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-16 sm:w-24">
          <Image
            alt="Vrezh Oganisyan"
            height={110}
            width={110}
            src={avatarImg}
            className="rounded-full cursor-pointer"
          />
        </div>
        <h2 className="ml-4 text-gray-600 dark:text-gray-400">
          {description} <br />
          <div className="hidden md:block mt-4">
            {social}{" "}
            <ExternalLink href="https://t.me/oganisyancom">
              Telegram
            </ExternalLink>{" "}
            {socialDivider}{" "}
            <ExternalLink href="https://twitter.com/vre2h">
              Twitter
            </ExternalLink>
          </div>
        </h2>
      </div>
      <div className="mt-4 md:hidden">
        {social}{" "}
        <ExternalLink href="https://t.me/oganisyancom">Telegram</ExternalLink>{" "}
        {socialDivider}{" "}
        <ExternalLink href="https://twitter.com/vre2h">Twitter</ExternalLink>
      </div>
    </div>
  );
}
