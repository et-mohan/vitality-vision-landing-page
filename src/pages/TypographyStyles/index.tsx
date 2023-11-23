import React from "react";

import { Line, Text } from "components";
import TypographyStylesTitlecard from "components/TypographyStylesTitlecard";

const TypographyStylesPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-satoshi items-center justify-start mx-auto pb-[73px] w-full">
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
          <TypographyStylesTitlecard className="bg-white-A700 border-b border-blue_gray-50 border-solid flex flex-col gap-2.5 items-start justify-start md:px-10 px-32 sm:px-5 py-16 w-auto md:w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1197px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Display 01
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-12 w-[99%] md:w-full">
              <Text
                className="md:text-5xl text-[64px] text-gray-900"
                size="txtSatoshiMedium64"
              >
                Display 01 SemiBold
              </Text>
              <Text
                className="md:text-5xl text-[64px] text-gray-900"
                size="txtSatoshiBold64"
              >
                Display 01 Bold
              </Text>
              <Text
                className="md:text-5xl text-[64px] text-gray-900"
                size="txtSatoshiBlack64"
              >
                Display 01 Extra Bold
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-20 w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Display 02
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[47px] w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-gray-900"
                size="txtSatoshiMedium56"
              >
                Display 02 Semi Bold
              </Text>
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-gray-900"
                size="txtSatoshiBold56"
              >
                Display 02 Bold
              </Text>
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-gray-900"
                size="txtSatoshiBlack56"
              >
                Display 02 Extra Bold
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[83px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Heading 01
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[47px] w-[95%] md:w-full">
              <Text
                className="leading-[54.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-[27%] sm:w-full"
                size="txtSatoshiMedium40"
              >
                Heading 01 Semi Bold
              </Text>
              <Text
                className="leading-[54.00px] md:ml-[0] ml-[127px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-1/5 sm:w-full"
                size="txtSatoshiBold40"
              >
                Heading 01 Bold
              </Text>
              <Text
                className="leading-[54.00px] md:ml-[0] ml-[205px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-1/4 sm:w-full"
                size="txtSatoshiBlack40"
              >
                Heading 01 Extra Bold
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[99px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Heading 02
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[47px] w-[95%] md:w-full">
              <Text
                className="leading-[44.00px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-1/5 sm:w-full"
                size="txtSatoshiMedium32"
              >
                Heading 02 Semi Bold
              </Text>
              <Text
                className="leading-[44.00px] md:ml-[0] ml-[199px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-1/5 sm:w-full"
                size="txtSatoshiBold32"
              >
                Heading 02 Bold
              </Text>
              <Text
                className="leading-[44.00px] md:ml-[0] ml-[205px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-1/4 sm:w-full"
                size="txtSatoshiBlack32"
              >
                Heading 02 Extra Bold
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[99px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Heading 03
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[50px] w-[97%] md:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                size="txtSatoshiMedium28"
              >
                Heading 03 Semi Bold
              </Text>
              <Text
                className="md:ml-[0] ml-[142px] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                size="txtSatoshiBold28"
              >
                Heading 03 Bold
              </Text>
              <Text
                className="md:ml-[0] ml-[211px] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                size="txtSatoshiBlack28"
              >
                Heading 03 Extra Bold
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[133px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Heading 04
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[49px] w-[94%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtSatoshiMedium24"
              >
                Heading 04 Semi Bold
              </Text>
              <Text
                className="md:ml-[0] ml-[180px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtSatoshiBold24"
              >
                Heading 04 Bold
              </Text>
              <Text
                className="ml-60 md:ml-[0] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtSatoshiBlack24"
              >
                Heading 04 Extra Bold
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[127px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Heading 05
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[50px] w-[90%] md:w-full">
              <Text
                className="text-gray-900 text-xl"
                size="txtSatoshiMedium20Gray900"
              >
                Heading 05 Semi Bold
              </Text>
              <Text
                className="md:ml-[0] ml-[222px] text-gray-900 text-xl"
                size="txtSatoshiBold20"
              >
                Heading 05 Bold
              </Text>
              <Text
                className="md:ml-[0] ml-[273px] text-gray-900 text-xl"
                size="txtSatoshiBlack20"
              >
                Heading 05 Extra Bold
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[124px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Heading 06
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[47px] w-[88%] md:w-full">
              <Text
                className="text-gray-900 text-lg"
                size="txtSatoshiMedium18Gray900"
              >
                Heading 06 Semi Bold
              </Text>
              <Text
                className="md:ml-[0] ml-[242px] text-gray-900 text-lg"
                size="txtSatoshiBold18"
              >
                Heading 06 Bold
              </Text>
              <Text
                className="ml-72 md:ml-[0] text-gray-900 text-lg"
                size="txtSatoshiBlack18"
              >
                Heading 06 Extra Bold
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[113px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Title
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[47px] w-[81%] md:w-full">
              <Text
                className="text-base text-gray-900"
                size="txtSatoshiMedium16Gray900"
              >
                Title Semi Bold
              </Text>
              <Text
                className="md:ml-[0] ml-[318px] text-base text-gray-900"
                size="txtSatoshiBold16"
              >
                Title Bold
              </Text>
              <Text
                className="md:ml-[0] ml-[361px] text-base text-gray-900"
                size="txtSatoshiBlack16"
              >
                Title Exra Bold
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[143px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Subheading
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-7 w-[88%] md:w-full">
              <Text className="text-gray-900 text-sm" size="txtSatoshiMedium14">
                Subheading Medium
              </Text>
              <Text
                className="md:ml-[0] ml-[295px] text-gray-900 text-sm"
                size="txtSatoshiBold14"
              >
                Subheading Bold
              </Text>
              <Text
                className="md:ml-[0] ml-[319px] text-gray-900 text-sm underline"
                size="txtSatoshiMedium14"
              >
                Subheading Medium Underline
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[145px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Paragraph 01
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[27px] w-[90%] md:w-full">
              <Text
                className="text-base text-gray-900"
                size="txtSatoshiMedium16Gray900"
              >
                Paragraph 01 Regular
              </Text>
              <Text
                className="md:ml-[0] ml-[269px] text-base text-gray-900"
                size="txtSatoshiMedium16Gray900"
              >
                Paragraph 01 Semi Bold
              </Text>
              <Text
                className="md:ml-[0] ml-[257px] text-base text-gray-900 underline"
                size="txtSatoshiLight16"
              >
                Paragraph 01 Regular Underline
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[167px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Paragraph 02
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-7 w-[88%] md:w-full">
              <Text className="text-gray-900 text-sm" size="txtSatoshiMedium14">
                Paragraph 02 Regular
              </Text>
              <Text
                className="md:ml-[0] ml-[285px] text-gray-900 text-sm"
                size="txtSatoshiMedium14"
              >
                Paragraph 02 Semi Bold
              </Text>
              <Text
                className="md:ml-[0] ml-[276px] text-gray-900 text-sm underline"
                size="txtSatoshiLight14"
              >
                Paragraph 02 Regular Underline
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[169px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Blockquote
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-7 w-[85%] md:w-full">
              <Text
                className="text-gray-900 text-xl"
                size="txtSatoshiMedium20Gray900"
              >
                Blockquote Medium
              </Text>
              <Text
                className="md:ml-[0] ml-[246px] text-gray-900 text-xl"
                size="txtSatoshiMedium20Gray900"
              >
                Blockquote SemiBold
              </Text>
              <Text
                className="md:ml-[0] ml-[238px] text-gray-900 text-xl"
                size="txtSatoshiBold20"
              >
                Blockquote Bold
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[174px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Capitalized
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[25px] w-[89%] md:w-full">
              <Text
                className="text-gray-900 text-sm tracking-[2.00px] uppercase"
                size="txtSatoshiLight14"
              >
                Capitalized Regular
              </Text>
              <Text
                className="md:ml-[0] ml-[243px] text-gray-900 text-sm tracking-[2.00px] uppercase"
                size="txtSatoshiMedium14"
              >
                Capitalized Medium
              </Text>
              <Text
                className="md:ml-[0] ml-[251px] text-gray-900 text-sm tracking-[2.00px] uppercase"
                size="txtSatoshiMedium14"
              >
                Capitalized Semi Bold
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[118px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Caption
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[26px] w-[85%] md:w-full">
              <Text className="text-gray-900 text-xs" size="txtSatoshiLight12">
                Caption Regular
              </Text>
              <Text
                className="md:ml-[0] ml-[342px] text-gray-900 text-xs"
                size="txtSatoshiMedium12"
              >
                Caption Medium
              </Text>
              <Text
                className="md:ml-[0] ml-[341px] text-gray-900 text-xs uppercase"
                size="txtSatoshiMedium12"
              >
                Caption Medium Capital
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[162px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Tiny
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[25px] w-[97%] md:w-full">
              <Text
                className="text-[10px] text-gray-900"
                size="txtSatoshiLight10"
              >
                Tiny Regular
              </Text>
              <Text
                className="text-[10px] text-gray-900 uppercase"
                size="txtSatoshiMedium10"
              >
                Tiny Semi Bold
              </Text>
              <Text
                className="text-[10px] text-gray-900 uppercase"
                size="txtSatoshiMedium10"
              >
                It is a long established fact that a reader will be distracted
                by the readable content.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[115px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Labels
                </Text>
                <Line className="bg-blue_gray-300 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[25px] w-[78%] md:w-full">
              <Text
                className="text-[10px] text-gray-900 tracking-[0.20px]"
                size="txtSatoshiMedium10"
              >
                Small Label
              </Text>
              <Text
                className="md:ml-[0] ml-[372px] text-gray-900 text-xs tracking-[0.20px]"
                size="txtSatoshiMedium12"
              >
                Medium Label
              </Text>
              <Text
                className="md:ml-[0] ml-[352px] md:mt-0 mt-[3px] text-gray-900 text-sm"
                size="txtSatoshiMedium14"
              >
                Large Label
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypographyStylesPage;
