import React from "react";

import { Button, CheckBox, Img, Input, List, Text } from "components";
import HomeContactsection from "components/HomeContactsection";
import HomeHerosection from "components/HomeHerosection";
import HomeImagarysection from "components/HomeImagarysection";
import HomeImagarysection1 from "components/HomeImagarysection1";

const Home1Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-satoshi sm:gap-10 md:gap-10 gap-32 items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <header className="border-b border-blue_gray-50 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="h-6 md:ml-[0] ml-[167px] md:mt-0 my-[27px] w-6"
              src="images/img_refresh.svg"
              alt="refresh"
            />
            <ul className="flex md:flex-1 md:flex-col flex-row gap-11 md:hidden items-center justify-start md:ml-[0] ml-[166px] md:mt-0 my-5 w-auto md:w-full common-row-list">
              <li>
                <a href="javascript:">
                  <ul className="flex flex-row gap-8 items-start justify-start">
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtSatoshiMedium14">Home</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtSatoshiMedium14">Services</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtSatoshiMedium14">About Us</Text>
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row font-inter gap-[9.5px] items-center justify-start">
                    <Img
                      className="h-[38px] w-[38px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="sm:text-[17.38px] md:text-[19.38px] text-[21.38px] text-gray-900 w-auto"
                      size="txtInterMedium2138"
                    >
                      Vitality
                    </Text>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <ul className="flex flex-row font-satoshi gap-8 items-start justify-start">
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtSatoshiMedium14">Contact</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtSatoshiMedium14">Blog</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtSatoshiMedium14">Testimonials</Text>
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
            </ul>
            <Img
              className="h-6 md:ml-[0] ml-[249px] mr-[167px] md:mt-0 my-[27px] w-6"
              src="images/img_trash.svg"
              alt="trash"
            />
          </header>
          <HomeHerosection
            className="bg-gray-50 flex flex-col items-center justify-end p-[34px] sm:px-5 w-full"
            userconfidence={
              <Text className="font-medium leading-[24.00px] text-base text-gray-900 w-full">
                <span className="text-gray-900 font-satoshi text-left">
                  Restore the missing{" "}
                </span>
                <span className="text-red-A200 font-retripsdemo text-left font-normal">
                  confidence
                </span>
                <span className="text-gray-900 font-satoshi text-left">
                  {" "}
                  back to your daily life again.
                </span>
              </Text>
            }
          />
          <div className="flex flex-col gap-8 items-start justify-start max-w-[1111px] mt-28 mx-auto md:px-5 w-full">
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
                      <Img
                        className="h-6"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
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
                        Discover a world of vibrant colors and crisp clarity
                        with our comprehensive eye care
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
                      <Img
                        className="h-6"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
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
                        Discover a world of vibrant colors and crisp clarity
                        with our comprehensive eye care
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
                      <Img
                        className="h-6"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
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
                        Discover a world of vibrant colors and crisp clarity
                        with our comprehensive eye care
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
                      <Img
                        className="h-6"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
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
                        Discover a world of vibrant colors and crisp clarity
                        with our comprehensive eye care
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
                      <Img
                        className="h-6"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
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
                        Discover a world of vibrant colors and crisp clarity
                        with our comprehensive eye care
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[165px] w-full">
          <HomeImagarysection
            className="flex md:flex-col flex-row md:gap-10 gap-[148px] items-center justify-between max-w-[1045px] mx-auto w-full"
            offer={
              <Text className="font-medium leading-[26.00px] ml-60 md:ml-[0] text-gray-900 text-lg w-[46%] sm:w-full">
                <span className="text-gray-900 font-satoshi text-left">
                  With{" "}
                </span>
                <span className="text-red-A200 font-satoshi text-left font-bold">
                  20% Off
                </span>
                <span className="text-gray-900 font-satoshi text-left">
                  {" "}
                  for your first purchase
                </span>
              </Text>
            }
            paragraph01reguthree={
              <Text className="font-medium leading-[26.00px] text-gray-900 text-lg w-[46%] sm:w-full">
                <span className="text-gray-900 font-satoshi text-left">
                  More than{" "}
                </span>
                <span className="text-red-A200 font-satoshi text-left font-bold">
                  10000
                </span>
                <span className="text-gray-900 font-satoshi text-left">
                  {" "}
                  happy customers
                </span>
              </Text>
            }
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="bg-red-A200 flex flex-col gap-8 items-center justify-start py-16 w-full">
            <div className="flex flex-col gap-4 items-start justify-start md:px-5 w-auto sm:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
                size="txtSatoshiBold40WhiteA700"
              >
                What Our Patients Say
              </Text>
              <Text
                className="leading-[26.00px] max-w-[454px] md:max-w-full text-center text-lg text-white-A700"
                size="txtSatoshiMedium18WhiteA700"
              >
                Discover a world of vibrant colors and crisp clarity with our
                comprehensive eye care
              </Text>
            </div>
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] overflow-auto w-full">
              <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start px-5 py-8 rounded-[16px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_ellipse40.png"
                        alt="ellipseForty"
                      />
                    </div>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Sarah H
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[319px] md:max-w-full text-gray-900 text-sm"
                    size="txtSatoshiMedium14"
                  >
                    VisionVitality truly transformed my outlook on life. Their
                    compassionate care and expertise helped me regain my
                    confidence in my vision.
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start px-5 py-8 rounded-[16px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_ellipse40_48x48.png"
                        alt="ellipseForty"
                      />
                    </div>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Sarah H
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[319px] md:max-w-full text-gray-900 text-sm"
                    size="txtSatoshiMedium14"
                  >
                    VisionVitality truly transformed my outlook on life. Their
                    compassionate care and expertise helped me regain my
                    confidence in my vision.
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start px-5 py-8 rounded-[16px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_ellipse40_1.png"
                        alt="ellipseForty"
                      />
                    </div>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Sarah H
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[319px] md:max-w-full text-gray-900 text-sm"
                    size="txtSatoshiMedium14"
                  >
                    VisionVitality truly transformed my outlook on life. Their
                    compassionate care and expertise helped me regain my
                    confidence in my vision.
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start px-5 py-8 rounded-[16px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_ellipse40_2.png"
                        alt="ellipseForty"
                      />
                    </div>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Sarah H
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[319px] md:max-w-full text-gray-900 text-sm"
                    size="txtSatoshiMedium14"
                  >
                    VisionVitality truly transformed my outlook on life. Their
                    compassionate care and expertise helped me regain my
                    confidence in my vision.
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start px-5 py-8 rounded-[16px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_ellipse40_3.png"
                        alt="ellipseForty"
                      />
                    </div>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Sarah H
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[319px] md:max-w-full text-gray-900 text-sm"
                    size="txtSatoshiMedium14"
                  >
                    VisionVitality truly transformed my outlook on life. Their
                    compassionate care and expertise helped me regain my
                    confidence in my vision.
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start px-5 py-8 rounded-[16px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_ellipse40_4.png"
                        alt="ellipseForty"
                      />
                    </div>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Sarah H
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[319px] md:max-w-full text-gray-900 text-sm"
                    size="txtSatoshiMedium14"
                  >
                    VisionVitality truly transformed my outlook on life. Their
                    compassionate care and expertise helped me regain my
                    confidence in my vision.
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start px-5 py-8 rounded-[16px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_ellipse40_5.png"
                        alt="ellipseForty"
                      />
                    </div>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Sarah H
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[319px] md:max-w-full text-gray-900 text-sm"
                    size="txtSatoshiMedium14"
                  >
                    VisionVitality truly transformed my outlook on life. Their
                    compassionate care and expertise helped me regain my
                    confidence in my vision.
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start px-5 py-8 rounded-[16px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_ellipse40_6.png"
                        alt="ellipseForty"
                      />
                    </div>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Sarah H
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[319px] md:max-w-full text-gray-900 text-sm"
                    size="txtSatoshiMedium14"
                  >
                    VisionVitality truly transformed my outlook on life. Their
                    compassionate care and expertise helped me regain my
                    confidence in my vision.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeImagarysection1 className="flex md:flex-col flex-row md:gap-10 gap-[148px] items-center justify-between max-w-[891px] mx-auto md:px-5 w-full" />
        <div className="flex flex-col md:gap-10 gap-32 items-center w-full">
          <HomeContactsection className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-start justify-between p-16 md:px-10 sm:px-5 w-full" />
          <footer className="border-blue_gray-50 border-solid border-t flex items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mx-auto my-11 w-[78%]">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-row gap-[9.5px] items-center justify-start w-auto">
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
                  <div className="flex flex-col font-satoshi gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Pages
                    </Text>
                    <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a href="javascript:" className="text-gray-900 text-sm">
                          <Text size="txtSatoshiMedium14">Home</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-900 text-sm">
                          <Text size="txtSatoshiMedium14">Services</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-900 text-sm">
                          <Text size="txtSatoshiMedium14">About Us</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-900 text-sm">
                          <Text size="txtSatoshiMedium14">Contact</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-900 text-sm">
                          <Text size="txtSatoshiMedium14">Blog</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-900 text-sm">
                          <Text size="txtSatoshiMedium14">Testimonials</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col font-satoshi gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Contact
                    </Text>
                    <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a href="javascript:" className="text-gray-900 text-sm">
                          <Text size="txtSatoshiMedium14">
                            9153 Jerry Dr, Juneau, Alaska 99801, USA
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-900 text-sm">
                          <Text size="txtSatoshiMedium14">(907) 789-7623</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-900 text-sm">
                          <Text size="txtSatoshiMedium14">Email@gmail.com</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col font-satoshi gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtSatoshiBold16"
                    >
                      Info
                    </Text>
                    <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a href="javascript:" className="text-gray-900 text-sm">
                          <Text size="txtSatoshiMedium14">Terms of use</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-900 text-sm">
                          <Text size="txtSatoshiMedium14">Privacy policy</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-900 text-sm">
                          <Text size="txtSatoshiMedium14">
                            Email@gmail.coma
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[855px] mr-[9px] mt-11 w-[23%] md:w-full">
                  <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <div className="flex flex-col h-6 items-start justify-start rounded-[50%] w-6">
                      <div className="flex flex-col items-center justify-start my-[3px] w-[88%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-[15px]"
                            src="images/img_settings_red_a200.svg"
                            alt="settings_Two"
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
                  className="mt-[47px] text-blue_gray-500 text-sm"
                  size="txtSatoshiMedium14Bluegray500"
                >
                  Copyright 2023 VisionVitality
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
