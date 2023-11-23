import React from "react";

import { Text } from "components";

type ComponentsColumnFourProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "firstname"
> &
  Partial<{ firstname: string }>;

const ComponentsColumnFour: React.FC<ComponentsColumnFourProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  {props?.firstname}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ComponentsColumnFour.defaultProps = { firstname: "First name" };

export default ComponentsColumnFour;
