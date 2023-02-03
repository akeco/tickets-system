import React from "react";
import clsx from "clsx";

type Variant = "outline" | "ghost";

type ButtonProps = {
  variant?: Variant;
  children: React.ReactNode;
  component?: React.ReactNode;
} & JSX.IntrinsicElements["button"];

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "ghost",
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        `py-1 px-3 rounded-md ${
          variant === "outline" ? "border" : "bg-gray-100"
        }`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
