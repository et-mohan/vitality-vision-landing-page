import React from "react";

import { Button, Line, List, Text } from "components";
import ColorsColorcard from "components/ColorsColorcard";
import TypographyStylesTitlecard from "components/TypographyStylesTitlecard";

const ColorsPage: React.FC = () => {
  const colorsColorcardPropList = [
    {},
    { colorhexcode: "#F2F4F7", graythree: "Gray 2" },
    { colorhexcode: "#667085", graythree: "Gray 1" },
    { colorhexcode: "#FFFFFF", graythree: "Light" },
    { colorhexcode: "#101828", graythree: "Dark" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-satoshi sm:gap-10 md:gap-10 gap-[79px] items-center justify-start mx-auto pb-16 w-full">
        <TypographyStylesTitlecard
          className="bg-white-A700 border-b border-blue_gray-50 border-solid flex flex-col gap-2.5 items-start justify-start md:px-10 px-32 sm:px-5 py-16 w-auto md:w-full"
          title="Colors"
          description="Used colors for this project."
        />
        <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start max-w-[1184px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start w-auto md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
              size="txtSatoshiMedium24"
            >
              Main Color Palette
            </Text>
            <Line className="bg-blue_gray-100_01 h-px w-full" />
          </div>
          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-gray-900 text-lg w-auto"
                  size="txtSatoshiMedium18Gray900"
                >
                  Neutral
                </Text>
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtSatoshiMedium16"
                >
                  Text and background colors.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  {colorsColorcardPropList.map((props, index) => (
                    <React.Fragment key={`ColorsColorcard${index}`}>
                      <ColorsColorcard
                        className="bg-white-A700 flex flex-col gap-2.5 h-[154px] md:h-auto items-start justify-start pb-3 pl-3 sm:pr-5 pr-[39px] pt-[118px] rounded-lg shadow-bs1 w-[113px]"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
            <List
              className="flex flex-col gap-16 w-[52%]"
              orientation="vertical"
            >
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-20 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtSatoshiMedium18Gray900"
                  >
                    Brand
                  </Text>
                  <Text
                    className="text-base text-blue_gray-500 w-auto"
                    size="txtInterMedium16"
                  >
                    Primary brand colors using in buttons and etc.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <ColorsColorcard
                      className="bg-white-A700 flex flex-col gap-2.5 h-[154px] md:h-auto items-start justify-start pb-3 pl-3 sm:pr-5 pr-[39px] pt-[118px] rounded-lg shadow-bs1 w-[113px]"
                      graythree="Brand"
                      colorhexcode="#FD4561"
                    />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-20 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtSatoshiMedium18Gray900"
                  >
                    Gradient
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[411px] md:max-w-full text-base text-blue_gray-500"
                    size="txtInterMedium16"
                  >
                    Explanation about these colors and the usage of them.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <ColorsColorcard
                      className="bg-white-A700 flex flex-col gap-2.5 h-[154px] md:h-auto items-start justify-start pb-3 pl-3 sm:pr-5 pr-[39px] pt-[118px] rounded-lg shadow-bs1 w-[113px]"
                      graythree="Gradient"
                      colorhexcode="Gradient"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorsPage;
