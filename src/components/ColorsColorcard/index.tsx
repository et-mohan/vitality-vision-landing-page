import React from "react";

import { Button, Text } from "components";

type ColorsColorcardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "graythree" | "colorhexcode"
> &
  Partial<{ graythree: string; colorhexcode: string }>;

const ColorsColorcard: React.FC<ColorsColorcardProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <Button
            className="!text-gray-900 cursor-pointer font-medium font-satoshi min-w-[113px] rounded-tl-lg rounded-tr-lg text-center text-lg"
            color="gray_50"
            size="sm"
            variant="fill"
          >
            {props?.graythree}
          </Button>
        </div>
        <Text
          className="text-base text-blue_gray-500 w-auto"
          size="txtSatoshiMedium16"
        >
          {props?.colorhexcode}
        </Text>
      </div>
    </>
  );
};

ColorsColorcard.defaultProps = { graythree: "Gray 3", colorhexcode: "#F9FAFB" };

export default ColorsColorcard;
