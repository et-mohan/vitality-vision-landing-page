import React from "react";

import { Button, Img, Text } from "components";

type HomeImagarysectionProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "offer"
  | "paragraph01reguthree"
  | "embracelifewithOne"
  | "description"
  | "orderNow"
> &
  Partial<{
    offer: JSX.Element | string;
    paragraph01reguthree: JSX.Element | string;
    embracelifewithOne: string;
    description: string;
    orderNow: string;
  }>;

const HomeImagarysection: React.FC<HomeImagarysectionProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[252px] sm:h-[322px] h-[378px] relative w-[43%] md:w-full">
          <div className="absolute flex flex-col md:gap-10 gap-[216px] inset-x-[0] justify-start mx-auto top-[0] w-full">
            {props?.offer}
            {props?.paragraph01reguthree}
          </div>
          <div className="absolute md:h-[252px] h-[378px] inset-y-[0] left-[0] my-auto w-[95%] sm:w-full">
            <div className="absolute bg-deep_purple-100 flex flex-col items-center justify-start left-[0] rounded-[13px] top-[0] w-[54%]">
              <Img
                className="h-[252px] md:h-auto object-cover rounded-[13px] w-full"
                src="images/img_clearroundfra.png"
                alt="clearroundfra"
              />
            </div>
            <div className="absolute bg-deep_purple-300 bottom-[0] flex flex-col items-center justify-start right-[0] rounded-[13px] w-[54%]">
              <Img
                className="h-[252px] md:h-auto object-cover rounded-[13px] w-full"
                src="images/img_studioshotfru.png"
                alt="studioshotfru"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
            <Text
              className="leading-[54.00px] max-w-[454px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
              size="txtSatoshiBold40"
            >
              {props?.embracelifewithOne}
            </Text>
            <Text
              className="leading-[26.00px] max-w-[454px] md:max-w-full text-blue_gray-500 text-lg"
              size="txtSatoshiMedium18"
            >
              {props?.description}
            </Text>
          </div>
          <Button
            className="border border-red-A200 border-solid cursor-pointer font-medium font-satoshi min-w-[117px] text-base text-center"
            shape="round"
            color="red_A200"
            size="xs"
            variant="fill"
          >
            {props?.orderNow}
          </Button>
        </div>
      </div>
    </>
  );
};

HomeImagarysection.defaultProps = {
  offer: (
    <Text
      className="leading-[26.00px] ml-60 md:ml-[0] text-gray-900 text-lg w-[46%] sm:w-full"
      size="txtSatoshiMedium18Gray900"
    >
      <span className="text-gray-900 font-satoshi text-left font-medium">
        With{" "}
      </span>
      <span className="text-red-A200 font-satoshi text-left font-bold">
        20% Off
      </span>
      <span className="text-gray-900 font-satoshi text-left font-medium">
        {" "}
        for your first purchase
      </span>
    </Text>
  ),
  paragraph01reguthree: (
    <Text
      className="leading-[26.00px] text-gray-900 text-lg w-[46%] sm:w-full"
      size="txtSatoshiMedium18Gray900"
    >
      <span className="text-gray-900 font-satoshi text-left font-medium">
        More than{" "}
      </span>
      <span className="text-red-A200 font-satoshi text-left font-bold">
        10000
      </span>
      <span className="text-gray-900 font-satoshi text-left font-medium">
        {" "}
        happy customers
      </span>
    </Text>
  ),
  embracelifewithOne: "Embrace Life with Crystal-Clear Vision",
  description:
    "Enhance your visual experience with our cutting-edge eyewear collection, meticulously curated for both style and comfort.",
  orderNow: "Order now",
};

export default HomeImagarysection;
