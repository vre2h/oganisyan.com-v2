export default function ProjectCard({
  title,
  description,
  href,
  isExternal,
  icon,
}) {
  return (
    <a
      className="w-full mb-4 hover:shadow cursor-pointer transition duration-400"
      href={href}
      aria-label={title}
      target={isExternal && "_blank"}
      rel="noopener noreferrer"
    >
      <div className="flex items-center border border-gray-200 dark:border-gray-800 dark:hover:border-gray-100 transition duration-400 rounded p-4">
        <h4 className="w-full flex items-center justify-between text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
          <span>{title}</span>
          {icon && (
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </h4>
        <p className="leading-5 text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
    </a>
  );
}
