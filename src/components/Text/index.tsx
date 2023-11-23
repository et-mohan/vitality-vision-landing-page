import React from "react";

const sizeClasses = {
  txtRetripsDEMO37: "font-normal font-retripsdemo",
  txtSatoshiLight16: "font-light font-satoshi",
  txtSatoshiMedium14Bluegray500: "font-medium font-satoshi",
  txtSatoshiBlack28: "font-black font-satoshi",
  txtSatoshiMedium16: "font-medium font-satoshi",
  txtSatoshiBold14: "font-bold font-satoshi",
  txtSatoshiMedium18: "font-medium font-satoshi",
  txtSatoshiBold56: "font-bold font-satoshi",
  txtSatoshiBlack24: "font-black font-satoshi",
  txtSatoshiMedium56: "font-medium font-satoshi",
  txtSatoshiBlack40: "font-black font-satoshi",
  txtSatoshiBold18: "font-bold font-satoshi",
  txtSatoshiMedium12: "font-medium font-satoshi",
  txtSatoshiMedium14: "font-medium font-satoshi",
  txtSatoshiBold16: "font-bold font-satoshi",
  txtSatoshiBlack64: "font-black font-satoshi",
  txtSatoshiBlack20: "font-black font-satoshi",
  txtSatoshiMedium20Gray900: "font-medium font-satoshi",
  txtSatoshiMedium32: "font-medium font-satoshi",
  txtSatoshiMedium10: "font-medium font-satoshi",
  txtSatoshiBold64: "font-bold font-satoshi",
  txtSatoshiBold20: "font-bold font-satoshi",
  txtSatoshiBold40: "font-bold font-satoshi",
  txtSatoshiMedium16Gray900: "font-medium font-satoshi",
  txtSatoshiMedium18Gray900: "font-medium font-satoshi",
  txtSatoshiBlack16: "font-black font-satoshi",
  txtSatoshiBold40WhiteA700: "font-bold font-satoshi",
  txtSatoshiMedium18WhiteA700: "font-medium font-satoshi",
  txtSatoshiBlack18: "font-black font-satoshi",
  txtSatoshiBold24: "font-bold font-satoshi",
  txtSatoshiBlack56: "font-black font-satoshi",
  txtSatoshiMedium28: "font-medium font-satoshi",
  txtSatoshiBold28: "font-bold font-satoshi",
  txtInterMedium16: "font-inter font-medium",
  txtSatoshiBlack32: "font-black font-satoshi",
  txtSatoshiMedium24: "font-medium font-satoshi",
  txtSatoshiMedium40: "font-medium font-satoshi",
  txtSatoshiMedium20: "font-medium font-satoshi",
  txtSatoshiMedium64: "font-medium font-satoshi",
  txtInterMedium2138: "font-inter font-medium",
  txtSatoshiBold32: "font-bold font-satoshi",
  txtSatoshiLight12: "font-light font-satoshi",
  txtSatoshiLight14: "font-light font-satoshi",
  txtInterRegular16: "font-inter font-normal",
  txtSatoshiLight10: "font-light font-satoshi",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
