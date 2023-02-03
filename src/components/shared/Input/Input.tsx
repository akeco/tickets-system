import React from "react";
import clsx from "clsx";

type InputProps = {
  type?: "input" | "textarea";
  label: string;
  errorMessage?: string;
  inputRef?: React.RefCallback<HTMLInputElement | HTMLTextAreaElement>;
} & JSX.IntrinsicElements["input"] &
  JSX.IntrinsicElements["textarea"];

const Input: React.FC<InputProps> = ({
  className,
  errorMessage,
  label,
  inputRef,
  type = "input",
  ...props
}) => {
  const classes = clsx(
    "w-full border border-solid rounded-md my-1 px-2 py-1 min-w-[220px] resize-none",
    className
  );

  return (
    <label className="block mt-1">
      <div className="flex">
        <small className="text-gray-700">{label}</small>
        <small className="text-red-500 ml-auto">{errorMessage}</small>
      </div>
      {type === "input" ? (
        <input
          role="input"
          {...props}
          ref={inputRef as React.RefCallback<HTMLInputElement>}
          className={classes}
        />
      ) : (
        <textarea
          role="input"
          {...props}
          ref={inputRef as React.RefCallback<HTMLTextAreaElement>}
          className={clsx(classes, "min-h-[100px]")}
        />
      )}
    </label>
  );
};

export default Input;
