import { string } from "prop-types";

const IconPropTypes = {
  width: string,
  height: string,
  color: string,
};

export function ExternalIcon() {
  return (
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
  );
}

export function Bottom() {
  return (
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
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export function Burger() {
  return (
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
      width="20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

Burger.defaultProps = {
  color: "#000",
};

export function Close() {
  return (
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
      width="20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

Close.defaultProps = {
  color: "#000",
};

export function Lego({ width, height, color, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 316 377"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M111.673 94.8076L96.5635 136.263L240.436 188.547L255.546 147.092L111.673 94.8076Z"
        stroke={color}
        strokeOpacity="0.1"
        strokeMiterlimit="10"
      />
      <path
        d="M56.5597 0.733737L41.2588 151.98L85.093 156.402L100.394 5.15509L56.5597 0.733737Z"
        stroke={color}
        strokeOpacity="0.1"
        strokeMiterlimit="10"
      />
      <path
        d="M146.985 186.728L29.1276 284.492L0.856445 250.885L118.714 153.122L146.985 186.728Z"
        stroke={color}
        strokeOpacity="0.1"
        strokeMiterlimit="10"
      />
      <path
        d="M215.399 221.556L291.89 353.903L253.706 376.144L177.215 243.797L215.399 221.556Z"
        stroke={color}
        strokeOpacity="0.1"
        strokeMiterlimit="10"
      />
      <path
        d="M238.652 203.348L315.143 335.695L276.959 357.936L200.468 225.589L238.652 203.348Z"
        stroke={color}
        strokeOpacity="0.1"
        strokeMiterlimit="10"
      />
      <path
        d="M74.1832 268.818L59.0732 310.274L202.946 362.558L218.056 321.102L74.1832 268.818Z"
        stroke={color}
        strokeOpacity="0.1"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

Lego.defaultProps = {
  color: "#5451FF",
};
Lego.propTypes = IconPropTypes;
