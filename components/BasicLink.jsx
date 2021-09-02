import React from "react";
import cn from "classnames";

const BasicLink = React.forwardRef(function BasicLinkUI(
  { children, className, href, download, ...props },
  ref
) {
  return (
    <a
      ref={ref}
      className={cn(
        className,
        "cursor-pointer transition duration-500 text-sm text-gray-900 hover:text-gray-900 dark:text-gray-100 border-b-2 p-b-4 dark:border-gray-700 dark:hover:border-gray-100 border-gray-300 hover:border-gray-900"
      )}
      href={href}
      download={download}
      {...props}
    >
      {children}
    </a>
  );
});

export default BasicLink;
