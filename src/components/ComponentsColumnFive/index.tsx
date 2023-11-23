import React from "react";

import { Text } from "components";

type ComponentsColumnFiveProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "textOne"
> &
  Partial<{ textOne: string }>;

const ComponentsColumnFive: React.FC<ComponentsColumnFiveProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-full items-start justify-start w-full">
          <div className="flex flex-col h-full items-start justify-start w-full">
            <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-full items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-full">
              <Text
                className="text-base text-blue_gray-500"
                size="txtInterRegular16"
              >
                {props?.textOne}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ComponentsColumnFive.defaultProps = { textOne: "Enter a description..." };

export default ComponentsColumnFive;
