import React from "react";

import { Button, Img, Text } from "components";

type HomeImagarysection1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "protectyourvisiOne" | "descriptionOne" | "orderNowOne"
> &
  Partial<{
    protectyourvisiOne: string;
    descriptionOne: string;
    orderNowOne: string;
  }>;

const HomeImagarysection1: React.FC<HomeImagarysection1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
            <Text
              className="leading-[54.00px] max-w-[454px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
              size="txtSatoshiBold40"
            >
              {props?.protectyourvisiOne}
            </Text>
            <Text
              className="leading-[26.00px] max-w-[454px] md:max-w-full text-blue_gray-500 text-lg"
              size="txtSatoshiMedium18"
            >
              {props?.descriptionOne}
            </Text>
          </div>
          <Button
            className="border border-red-A200 border-solid cursor-pointer font-medium font-satoshi min-w-[117px] text-base text-center"
            shape="round"
            color="red_A200"
            size="xs"
            variant="fill"
          >
            {props?.orderNowOne}
          </Button>
        </div>
        <div className="flex flex-col items-center justify-start w-[33%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-deep_purple-100 flex flex-col items-center justify-start rounded-[17px] w-full">
              <Img
                className="h-[327px] md:h-auto object-cover rounded-[17px] w-full"
                src="images/img_clearroundfra_327x289.png"
                alt="clearroundfra_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeImagarysection1.defaultProps = {
  protectyourvisiOne: "Protect Your Vision, Embrace the Outdoors",
  descriptionOne:
    "Explore our collection of protective eyewear designed to shield your eyes from harmful UV rays, ensuring optimal visual health in any environment.",
  orderNowOne: "Order now",
};

export default HomeImagarysection1;
