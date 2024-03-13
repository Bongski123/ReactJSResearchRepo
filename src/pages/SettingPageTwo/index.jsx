import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Switch, Input } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";

export default function SettingPageTwoPage() {
  return (
    <>
      <Helmet>
        <title>Arnel's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="self-end">
          <Header />
          <div className="flex md:flex-col justify-center items-start">
            <Sidebar1 className="flex flex-col w-[252px] h-screen pr-[30px] top-0 py-[30px] sm:pr-5 sm:py-5 !sticky overflow-auto" />
            <div className="p-[30px] sm:p-5 bg-gray-100 flex-1">
              <div className="flex flex-col items-end mb-[332px] gap-[72px] p-[30px] sm:p-5 bg-white-A700 rounded-[25px]">
                <div className="flex flex-col self-stretch mt-1.5">
                  <div>
                    <div className="flex flex-col">
                      <div className="flex justify-between w-[38%] md:w-full ml-4 gap-5">
                        <Text as="p" className="self-start !text-indigo-300 !font-medium">
                          Edit Profile
                        </Text>
                        <Text as="p" className="self-start !text-indigo-A700 !font-medium">
                          Preferences
                        </Text>
                        <Text as="p" className="self-end !text-indigo-300 !font-medium">
                          Security
                        </Text>
                      </div>
                      <div className="h-[3px] w-[13%] mt-1.5 ml-40 rounded-tl-[10px] rounded-tr-[10px] z-[1] bg-indigo-A700" />
                      <div className="h-px mt-[-1px] bg-gray-100_01" />
                    </div>
                  </div>
                  <div className="flex md:flex-col items-center mt-[41px] gap-[30px]">
                    <div className="flex flex-col w-full gap-[9px]">
                      <Text as="p">Currency</Text>
                      <Input
                        shape="round"
                        name="usd"
                        placeholder="USD"
                        className="sm:pr-5 border-teal-50 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col w-full gap-2.5">
                      <Text as="p">Time Zone</Text>
                      <Input
                        shape="round"
                        name="time"
                        placeholder="(GMT-12:00) International Date Line West"
                        className="sm:pr-5 border-teal-50 border border-solid"
                      />
                    </div>
                  </div>
                  <Text size="s" as="p" className="mt-[27px] !text-blue_gray-800_01">
                    Notification
                  </Text>
                  <div className="flex items-center mt-[18px] gap-5">
                    <Switch shape="square" />
                    <Text as="p" className="self-end">
                      I send or receive digita currency
                    </Text>
                  </div>
                  <div className="flex items-center mt-[15px] gap-[21px]">
                    <Switch shape="square" />
                    <Text as="p">I receive merchant order</Text>
                  </div>
                  <div className="flex sm:flex-col items-center mt-[15px] gap-[21px]">
                    <Switch shape="square" />
                    <Text as="p" className="self-end">
                      There are recommendation for my account
                    </Text>
                  </div>
                </div>
                <Button color="indigo_A700" size="sm" shape="round" className="sm:px-5 font-medium min-w-[190px]">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
