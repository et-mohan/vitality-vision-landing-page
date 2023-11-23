import React from "react";

import { Input } from "components";

type ComponentsColumninputTwoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const ComponentsColumninputTwo: React.FC<ComponentsColumninputTwoProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Input
              name="input_Two"
              placeholder="Email address"
              className="font-inter p-0 placeholder:text-blue_gray-500 text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid w-full"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

ComponentsColumninputTwo.defaultProps = {};

export default ComponentsColumninputTwo;
