import cn from "classnames";

export default function BasicLink({ children, className, ...props }) {
  return (
    <a
      className={cn(
        className,
        "transition duration-500 text-sm text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900"
      )}
      {...props}
    >
      {children}
    </a>
  );
}
