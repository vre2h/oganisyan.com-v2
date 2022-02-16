import classNames from "classnames";

export default function Loading({ className, style }) {
  return (
    <div
      style={style}
      className={classNames(
        className,
        "w-full h-screen flex justify-center items-center"
      )}
    >
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
