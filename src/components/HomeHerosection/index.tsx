import React from "react";

import { Button, Img, Text } from "components";

type HomeHerosectionProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "username"
  | "userdescription"
  | "bookappointment"
  | "userconfidence"
  | "userconfidencetitle"
> &
  Partial<{
    username: string;
    userdescription: string;
    bookappointment: string;
    userconfidence: JSX.Element | string;
    userconfidencetitle: JSX.Element | string;
  }>;

const HomeHerosection: React.FC<HomeHerosectionProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-0.5 w-[81%] md:w-full">
          <div className="flex flex-col gap-4 items-start justify-start md:mt-0 mt-[87px] w-auto sm:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <Text
                className="max-w-[454px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-gray-900"
                size="txtSatoshiBold56"
              >
                {props?.username}
              </Text>
              <Text
                className="leading-[24.00px] max-w-[454px] md:max-w-full text-base text-blue_gray-500"
                size="txtSatoshiMedium16"
              >
                {props?.userdescription}
              </Text>
            </div>
            <Button
              className="border border-red-A200 border-solid cursor-pointer font-medium font-satoshi min-w-[198px] text-base text-center"
              shape="round"
              color="red_A200"
              size="xs"
              variant="fill"
            >
              {props?.bookappointment}
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[118px] w-[24%] md:w-full">
            <div className="bg-deep_purple-50 flex flex-col items-center justify-start p-9 sm:px-5 rounded-[16px] w-full">
              <Img
                className="h-[109px] md:h-auto my-[72px] object-cover w-full"
                src="images/img_image6.png"
                alt="imageSix"
              />
            </div>
            {props?.userconfidence}
          </div>
          <div className="bg-deep_purple-50 flex flex-col gap-3.5 items-center justify-end ml-2 md:ml-[0] py-0.5 rounded-[16px] w-[24%] md:w-full">
            <Text
              className="leading-[54.00px] mt-12 sm:text-[33px] md:text-[35px] text-[37px] text-center text-red-A200 w-full"
              size="txtRetripsDEMO37"
            >
              {props?.userconfidencetitle}
            </Text>
            <Img
              className="h-56 md:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-full"
              src="images/img_istockphoto119.png"
              alt="istockphoto119"
            />
          </div>
        </div>
      </div>
    </>
  );
};

HomeHerosection.defaultProps = {
  username: "Clear Vision for a Bright Future",
  userdescription:
    "Discover a world of vibrant colors and crisp clarity with our comprehensive eye care",
  bookappointment: "Book an Appointment",
  userconfidence: (
    <Text
      className="leading-[24.00px] text-base text-gray-900 w-full"
      size="txtSatoshiMedium16Gray900"
    >
      <span className="text-gray-900 font-satoshi text-left font-medium">
        Restore the missing{" "}
      </span>
      <span className="text-red-A200 font-retripsdemo text-left font-normal">
        confidence
      </span>
      <span className="text-gray-900 font-satoshi text-left font-medium">
        {" "}
        back to your daily life again.
      </span>
    </Text>
  ),
  userconfidencetitle: (
    <>
      RESTORE
      <br />
      THE
      <br />
      CONFIDENCE
    </>
  ),
};

export default HomeHerosection;
