import React from "react";

const shapes = { round: "rounded-lg", circle: "rounded-[50%]" } as const;
const variants = {
  fill: {
    red_A200_a2: "bg-red-A200_a2 shadow-bs text-white-A700",
    gray_50: "bg-gray-50",
    red_A200: "bg-red-A200 shadow-bs text-white-A700",
    gray_100: "bg-gray-100",
  },
} as const;
const sizes = {
  xs: "p-3",
  sm: "pl-[29px] pr-[30px] sm:px-5 py-[35px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
