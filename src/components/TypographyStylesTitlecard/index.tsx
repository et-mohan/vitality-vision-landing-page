import React from "react";

import { Text } from "components";

type TypographyStylesTitlecardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "title" | "description"
> &
  Partial<{ title: string; description: string }>;

const TypographyStylesTitlecard: React.FC<TypographyStylesTitlecardProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-4 items-start justify-start max-w-[1184px] w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-auto"
              size="txtSatoshiBold40"
            >
              {props?.title}
            </Text>
            <Text
              className="text-base text-blue_gray-500 w-auto"
              size="txtSatoshiMedium16"
            >
              {props?.description}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TypographyStylesTitlecard.defaultProps = {
  title: "Typography",
  description: "A description about the section and it’s functionality.",
};

export default TypographyStylesTitlecard;
