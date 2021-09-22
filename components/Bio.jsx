import Image from "next/image";
import avatarImg from "../assets/img/general/avatar.jpg";

const ExternalLink = ({ href, children }) => (
  <a
    className="transition duration-500 inline-block text-base font-medium mt-4 text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Bio() {
  return (
    <div className="flex items-center mb-16 mt-4">
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
        I’m a software engineer, lecturer, and rebel. Here I write about
        education, management, and the art of non-conformity.
        <br />
        <ExternalLink href="https://t.me/oganisyancom">
          Follow Telegram channel
        </ExternalLink>
      </h2>
    </div>
  );
}
