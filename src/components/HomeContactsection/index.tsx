import React from "react";

import { Button, CheckBox, Img, Input, List, Text } from "components";

type HomeContactsectionProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "reachoutforpersonalizedcare"
  | "paragraph01regufive"
  | "phonenumber"
  | "firstname"
  | "lastname"
  | "description"
  | "submit"
> &
  Partial<{
    reachoutforpersonalizedcare: string;
    paragraph01regufive: string;
    phonenumber: string;
    firstname: string;
    lastname: string;
    description: string;
    submit: string;
  }>;

const HomeContactsection: React.FC<HomeContactsectionProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[101px] w-auto sm:w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
            <Text
              className="leading-[54.00px] max-w-[454px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
              size="txtSatoshiBold40"
            >
              {props?.reachoutforpersonalizedcare}
            </Text>
            <Text
              className="leading-[26.00px] max-w-[454px] md:max-w-full text-blue_gray-500 text-lg"
              size="txtSatoshiMedium18"
            >
              {props?.paragraph01regufive}
            </Text>
          </div>
          <div className="flex flex-row gap-8 items-start justify-start w-auto">
            <CheckBox
              className="font-bold font-satoshi text-base text-gray-900 text-left"
              inputClassName="mr-[5px]"
              name="paragraph01regu_Six"
              id="paragraph01regu_Six"
              label="Email@gmail.com"
              shape="square"
              size="xs"
            ></CheckBox>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img className="h-6 w-6" src="images/img_call.svg" alt="call" />
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtSatoshiBold16"
              >
                {props?.phonenumber}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start mr-[101px] w-auto sm:w-full">
          <List
            className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-2 justify-start w-auto sm:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col items-start justify-start w-[214px]">
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
            <div className="flex flex-col items-start justify-start w-[214px]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-500 w-auto"
                        size="txtInterRegular16"
                      >
                        {props?.lastname}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-col items-start justify-start w-[444px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Input
                  name="input"
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
          <div className="flex flex-col h-32 md:h-auto items-start justify-start w-[444px] sm:w-full">
            <div className="flex flex-col h-full items-start justify-start w-full">
              <div className="flex flex-col h-full items-start justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-full items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-full">
                  <Text
                    className="text-base text-blue_gray-500"
                    size="txtInterRegular16"
                  >
                    {props?.description}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="border border-red-A200 border-solid cursor-pointer font-medium font-satoshi text-base text-center w-[444px]"
            shape="round"
            color="red_A200"
            size="xs"
            variant="fill"
          >
            {props?.submit}
          </Button>
        </div>
      </div>
    </>
  );
};

HomeContactsection.defaultProps = {
  reachoutforpersonalizedcare: "Reach Out for Personalized Care",
  paragraph01regufive:
    "Have questions or want to schedule an appointment? Fill out the form below, and our team will get back to you promptly.",
  phonenumber: "(907) 789-7623",
  firstname: "First name",
  lastname: "Last name",
  description: "Enter a description...",
  submit: "Submit",
};

export default HomeContactsection;
