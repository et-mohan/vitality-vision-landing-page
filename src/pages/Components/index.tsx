import React from "react";

import { Button, CheckBox, Img, Input, List, Text } from "components";
import ComponentsColumnFive from "components/ComponentsColumnFive";
import ComponentsColumnFour from "components/ComponentsColumnFour";
import ComponentsColumninputTwo from "components/ComponentsColumninputTwo";

const ComponentsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[94px] items-start justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex flex-row gap-[9.5px] items-center justify-start md:px-5 w-auto">
          <Img
            className="h-[38px] w-[38px]"
            src="images/img_settings.svg"
            alt="settings"
          />
          <Text
            className="sm:text-[17.38px] md:text-[19.38px] text-[21.38px] text-gray-900 w-auto"
            size="txtInterMedium2138"
          >
            VisionVitality
          </Text>
        </div>
        <div className="border border-dashed border-deep_purple-A200 flex flex-col font-satoshi gap-5 items-center justify-start p-5 md:px-5 rounded-[5px] w-[17%] md:w-full">
          <Button
            className="border border-red-A200 border-solid cursor-pointer font-medium min-w-[198px] text-base text-center"
            shape="round"
            color="red_A200"
            size="xs"
            variant="fill"
          >
            Book an Appointment
          </Button>
          <Button
            className="border border-red-A200_a2 border-solid cursor-pointer font-medium min-w-[198px] text-base text-center"
            shape="round"
            color="red_A200_a2"
            size="xs"
            variant="fill"
          >
            Book an Appointment
          </Button>
        </div>
        <div className="flex flex-col font-satoshi md:gap-10 gap-[94px] items-center max-w-[1440px] mx-auto md:px-5 w-full">
          <div className="border-b border-blue_gray-50 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
            <Img
              className="h-6 md:ml-[0] ml-[147px] w-6"
              src="images/img_refresh.svg"
              alt="refresh"
            />
            <div className="flex md:flex-1 md:flex-col flex-row gap-11 items-center justify-start md:ml-[0] ml-[166px] w-auto md:w-full">
              <div className="flex flex-row gap-8 items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtSatoshiMedium14"
                >
                  Home
                </Text>
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtSatoshiMedium14"
                >
                  Services
                </Text>
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtSatoshiMedium14"
                >
                  About Us
                </Text>
              </div>
              <div className="flex flex-row font-inter gap-[9.5px] items-center justify-start w-auto">
                <Img
                  className="h-[38px] w-[38px]"
                  src="images/img_settings.svg"
                  alt="settings_One"
                />
                <Text
                  className="sm:text-[17.38px] md:text-[19.38px] text-[21.38px] text-gray-900 w-auto"
                  size="txtInterMedium2138"
                >
                  VisionVitality
                </Text>
              </div>
              <div className="flex flex-row font-satoshi gap-8 items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtSatoshiMedium14"
                >
                  Contact
                </Text>
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtSatoshiMedium14"
                >
                  Blog
                </Text>
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtSatoshiMedium14"
                >
                  Testimonials
                </Text>
              </div>
            </div>
            <Img
              className="h-6 md:ml-[0] ml-[188px] w-6"
              src="images/img_trash.svg"
              alt="trash"
            />
          </div>
          <div className="bg-gray-50 flex flex-col items-center justify-end p-[34px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-0.5 w-[81%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start md:mt-0 mt-[87px] w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="max-w-[454px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-gray-900"
                    size="txtSatoshiBold56"
                  >
                    Clear Vision for a Bright Future
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[454px] md:max-w-full text-base text-blue_gray-500"
                    size="txtSatoshiMedium16"
                  >
                    Discover a world of vibrant colors and crisp clarity with
                    our comprehensive eye care
                  </Text>
                </div>
                <Button
                  className="border border-red-A200 border-solid cursor-pointer font-medium min-w-[198px] text-base text-center"
                  shape="round"
                  color="red_A200"
                  size="xs"
                  variant="fill"
                >
                  Book an Appointment
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
              </div>
              <div className="bg-deep_purple-50 flex flex-col font-retripsdemo gap-3.5 items-center justify-end ml-2 md:ml-[0] py-0.5 rounded-[16px] w-[24%] md:w-full">
                <Text
                  className="leading-[54.00px] mt-12 sm:text-[33px] md:text-[35px] text-[37px] text-center text-red-A200"
                  size="txtRetripsDEMO37"
                >
                  <>
                    RESTORE
                    <br />
                    THE
                    <br />
                    CONFIDENCE
                  </>
                </Text>
                <Img
                  className="h-56 md:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-full"
                  src="images/img_istockphoto119.png"
                  alt="istockphoto119"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-satoshi gap-8 items-start justify-start md:px-5 w-auto md:w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-auto"
              size="txtSatoshiBold40"
            >
              Features
            </Text>
            <Text
              className="leading-[26.00px] max-w-[454px] md:max-w-full text-blue_gray-500 text-lg"
              size="txtSatoshiMedium18"
            >
              Discover a world of vibrant colors and crisp clarity with our
              comprehensive eye care
            </Text>
          </div>
          <div className="flex flex-col gap-[17px] items-start justify-start w-auto md:w-full">
            <List
              className="sm:flex-col flex-row gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-gradient  flex flex-col items-start justify-start px-5 py-8 rounded-[16px] w-auto">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Button
                    className="flex h-12 items-center justify-center w-12"
                    shape="circle"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img className="h-6" src="images/img_lock.svg" alt="lock" />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtSatoshiBold24"
                    >
                      Advanced Technology
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[275px] md:max-w-full text-gray-900 text-sm"
                      size="txtSatoshiMedium14"
                    >
                      Discover a world of vibrant colors and crisp clarity with
                      our comprehensive eye care
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gradient  flex flex-col items-start justify-start px-5 py-8 rounded-[16px] w-auto">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Button
                    className="flex h-12 items-center justify-center w-12"
                    shape="circle"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img className="h-6" src="images/img_lock.svg" alt="lock" />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtSatoshiBold24"
                    >
                      Advanced Technology
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[275px] md:max-w-full text-gray-900 text-sm"
                      size="txtSatoshiMedium14"
                    >
                      Discover a world of vibrant colors and crisp clarity with
                      our comprehensive eye care
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gradient  flex flex-col items-start justify-start px-5 py-8 rounded-[16px] w-auto">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Button
                    className="flex h-12 items-center justify-center w-12"
                    shape="circle"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img className="h-6" src="images/img_lock.svg" alt="lock" />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtSatoshiBold24"
                    >
                      Advanced Technology
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[275px] md:max-w-full text-gray-900 text-sm"
                      size="txtSatoshiMedium14"
                    >
                      Discover a world of vibrant colors and crisp clarity with
                      our comprehensive eye care
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <List
              className="sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-gradient  flex flex-col items-start justify-start px-5 py-8 rounded-[16px] w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-[507px] sm:w-full">
                  <Button
                    className="flex h-12 items-center justify-center w-12"
                    shape="circle"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img className="h-6" src="images/img_lock.svg" alt="lock" />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtSatoshiBold24"
                    >
                      Advanced Technology
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[275px] md:max-w-full text-gray-900 text-sm"
                      size="txtSatoshiMedium14"
                    >
                      Discover a world of vibrant colors and crisp clarity with
                      our comprehensive eye care
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gradient  flex flex-col items-start justify-start px-5 py-8 rounded-[16px] w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-[507px] sm:w-full">
                  <Button
                    className="flex h-12 items-center justify-center w-12"
                    shape="circle"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img className="h-6" src="images/img_lock.svg" alt="lock" />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtSatoshiBold24"
                    >
                      Advanced Technology
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[275px] md:max-w-full text-gray-900 text-sm"
                      size="txtSatoshiMedium14"
                    >
                      Discover a world of vibrant colors and crisp clarity with
                      our comprehensive eye care
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="border border-dashed border-deep_purple-A200 flex flex-col font-satoshi md:gap-10 gap-[122px] items-start justify-start p-5 md:px-5 rounded-[5px] w-[76%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[148px] items-center justify-between w-auto md:w-full">
            <div className="md:h-[252px] sm:h-[322px] h-[378px] relative w-[43%] md:w-full">
              <div className="absolute flex flex-col md:gap-10 gap-[216px] inset-x-[0] justify-start mx-auto top-[0] w-full">
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
                  Embrace Life with Crystal-Clear Vision
                </Text>
                <Text
                  className="leading-[26.00px] max-w-[454px] md:max-w-full text-blue_gray-500 text-lg"
                  size="txtSatoshiMedium18"
                >
                  Enhance your visual experience with our cutting-edge eyewear
                  collection, meticulously curated for both style and comfort.
                </Text>
              </div>
              <Button
                className="border border-red-A200 border-solid cursor-pointer font-medium min-w-[117px] text-base text-center"
                shape="round"
                color="red_A200"
                size="xs"
                variant="fill"
              >
                Order now
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[148px] items-center justify-between ml-1 md:ml-[0] w-auto md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[54.00px] max-w-[454px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                  size="txtSatoshiBold40"
                >
                  Protect Your Vision, Embrace the Outdoors
                </Text>
                <Text
                  className="leading-[26.00px] max-w-[454px] md:max-w-full text-blue_gray-500 text-lg"
                  size="txtSatoshiMedium18"
                >
                  Explore our collection of protective eyewear designed to
                  shield your eyes from harmful UV rays, ensuring optimal visual
                  health in any environment.
                </Text>
              </div>
              <Button
                className="border border-red-A200 border-solid cursor-pointer font-medium min-w-[117px] text-base text-center"
                shape="round"
                color="red_A200"
                size="xs"
                variant="fill"
              >
                Order now
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
        </div>
        <div className="border border-dashed border-deep_purple-A200 flex flex-col font-inter gap-4 items-start justify-start p-5 md:px-5 rounded-[5px] w-[34%] md:w-full">
          <div className="flex flex-col items-start justify-start w-[214px]">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Input
                  name="input"
                  placeholder="First name"
                  className="p-0 placeholder:text-blue_gray-500 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid w-full"
                  type="text"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[444px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Input
                  name="input_One"
                  placeholder="Email address"
                  className="p-0 placeholder:text-blue_gray-500 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid w-full"
                  type="email"
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
                    Enter a description...
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-satoshi md:gap-10 gap-[94px] items-center max-w-[1440px] mx-auto md:px-5 w-full">
          <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-start justify-between p-16 md:px-10 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start md:ml-[0] ml-[101px] w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[54.00px] max-w-[454px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                  size="txtSatoshiBold40"
                >
                  Reach Out for Personalized Care
                </Text>
                <Text
                  className="leading-[26.00px] max-w-[454px] md:max-w-full text-blue_gray-500 text-lg"
                  size="txtSatoshiMedium18"
                >
                  Have questions or want to schedule an appointment? Fill out
                  the form below, and our team will get back to you promptly.
                </Text>
              </div>
              <div className="flex flex-row gap-8 items-start justify-start w-auto">
                <CheckBox
                  className="font-bold text-base text-gray-900 text-left"
                  inputClassName="mr-[5px]"
                  name="paragraph01regu_Five"
                  id="paragraph01regu_Five"
                  label="Email@gmail.com"
                  shape="square"
                  size="xs"
                ></CheckBox>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtSatoshiBold16"
                  >
                    (907) 789-7623
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start mr-[101px] w-auto sm:w-full">
              <List
                className="sm:flex-col flex-row font-inter gap-4 grid sm:grid-cols-1 grid-cols-2 justify-start w-auto sm:w-full"
                orientation="horizontal"
              >
                <ComponentsColumnFour className="flex flex-col items-start justify-start w-[214px]" />
                <ComponentsColumnFour
                  className="flex flex-col items-start justify-start w-[214px]"
                  firstname="Last name"
                />
              </List>
              <ComponentsColumninputTwo className="flex flex-col font-inter items-start justify-start w-[444px] sm:w-full" />
              <ComponentsColumnFive className="flex flex-col font-inter h-32 md:h-auto items-start justify-start w-[444px] sm:w-full" />
              <Button
                className="border border-red-A200 border-solid cursor-pointer font-medium font-satoshi text-base text-center w-[444px]"
                shape="round"
                color="red_A200"
                size="xs"
                variant="fill"
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="border-blue_gray-50 border-solid border-t flex flex-col items-center justify-start p-11 md:px-10 sm:px-5 w-full">
            <div className="flex flex-col justify-start w-[83%] md:w-full">
              <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between w-full">
                <div className="flex flex-row gap-[9.5px] items-center justify-start w-auto">
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_settings.svg"
                    alt="settings_Two"
                  />
                  <Text
                    className="sm:text-[17.38px] md:text-[19.38px] text-[21.38px] text-gray-900 w-auto"
                    size="txtInterMedium2138"
                  >
                    VisionVitality
                  </Text>
                </div>
                <div className="flex flex-col font-satoshi gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtSatoshiBold16"
                  >
                    Pages
                  </Text>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtSatoshiMedium14"
                    >
                      Home
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtSatoshiMedium14"
                    >
                      Services
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtSatoshiMedium14"
                    >
                      About Us
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtSatoshiMedium14"
                    >
                      Contact
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtSatoshiMedium14"
                    >
                      Blog
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtSatoshiMedium14"
                    >
                      Testimonials
                    </Text>
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row font-satoshi md:gap-10 gap-[156px] grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Contact
                    </Text>
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtSatoshiMedium14"
                      >
                        9153 Jerry Dr, Juneau, Alaska 99801, USA
                      </Text>
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtSatoshiMedium14"
                      >
                        (907) 789-7623
                      </Text>
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtSatoshiMedium14"
                      >
                        Email@gmail.com
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Info
                    </Text>
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtSatoshiMedium14"
                      >
                        Terms of use
                      </Text>
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtSatoshiMedium14"
                      >
                        Privacy policy
                      </Text>
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtSatoshiMedium14"
                      >
                        Email@gmail.coma
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[855px] mt-11 w-[23%] md:w-full">
                <div className="flex flex-row gap-8 items-start justify-start w-auto">
                  <div className="flex flex-col h-6 items-start justify-start rounded-[50%] w-6">
                    <div className="flex flex-col items-center justify-start my-[3px] w-[88%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[15px]"
                          src="images/img_settings_red_a200.svg"
                          alt="settings_Three"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_component1.svg"
                    alt="componentOne"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_component1_red_a200.svg"
                    alt="componentOne_One"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_youtubenegative.svg"
                    alt="youtubenegative"
                  />
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[463px] mt-[47px] text-blue_gray-500 text-sm"
                size="txtSatoshiMedium14Bluegray500"
              >
                Copyright 2023 VisionVitality
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
