import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Text, Switch, Img, Heading } from "../../components";
import Sidebar1 from "../../components/Sidebar1";

export default function SettingPageThreePage() {
  const [searchBarValue14, setSearchBarValue14] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Arnel's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="self-end">
          <header>
            <div className="flex flex-col items-center justify-center">
              <div className="self-stretch p-5 bg-white-A700">
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <div className="flex justify-center items-center gap-[9px]">
                    <Img src="images/img_iconfinder_vect.png" alt="iconfindervect" className="w-[36px] object-cover" />
                    <Heading size="xs" as="h4" className="!font-mont">
                      BankDash.
                    </Heading>
                  </div>
                  <div className="flex md:flex-col justify-between items-center w-[82%] md:w-full gap-5">
                    <Heading as="h3" className="self-end">
                      Setting
                    </Heading>
                    <div className="flex sm:flex-col justify-between items-center w-[46%] md:w-full gap-5">
                      <Input
                        color="gray_100"
                        name="search"
                        placeholder="Search for something"
                        value={searchBarValue14}
                        onChange={(e) => setSearchBarValue14(e)}
                        prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
                        suffix={
                          searchBarValue14?.length > 0 ? (
                            <CloseSVG onClick={() => setSearchBarValue14("")} fillColor="#718ebfff" />
                          ) : null
                        }
                        className="w-[50%] gap-[15px] sm:px-5 text-indigo-200 rounded-[25px]"
                      />
                      <Button shape="circle" className="w-[50px]">
                        <Img src="images/img_settings_1.svg" />
                      </Button>
                      <Button shape="circle" className="w-[50px]">
                        <Img src="images/img_002_notification_1.svg" />
                      </Button>
                      <Img
                        src="images/img_pexels_christin.png"
                        alt="pexelschristin"
                        className="h-[60px] w-[60px] rounded-[50%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-[83%] bg-indigo-50" />
            </div>
          </header>
          <div className="flex md:flex-col justify-center items-start">
            <Sidebar1 className="flex flex-col w-[252px] h-screen pr-[30px] top-0 py-[30px] sm:pr-5 sm:py-5 !sticky overflow-auto" />
            <div className="p-[30px] sm:p-5 bg-gray-100 flex-1">
              <div className="flex flex-col items-start mb-[332px] gap-[33px] p-[30px] sm:p-5 bg-white-A700 rounded-[25px]">
                <div className="self-stretch mt-1.5">
                  <div className="flex flex-col">
                    <div className="flex justify-between w-[38%] md:w-full ml-4 gap-5">
                      <Text as="p" className="self-start !text-indigo-300 !font-medium">
                        Edit Profile
                      </Text>
                      <Text as="p" className="self-start !text-indigo-300 !font-medium">
                        Preferences
                      </Text>
                      <Text as="p" className="self-end !text-indigo-A700 !font-medium">
                        Security
                      </Text>
                    </div>
                    <div className="h-[3px] w-[16%] mt-1.5 ml-[315px] rounded-tl-[10px] rounded-tr-[10px] z-[1] bg-indigo-A700" />
                    <div className="h-px mt-[-1px] bg-gray-100_01" />
                  </div>
                </div>
                <div className="flex flex-col w-[49%] md:w-full">
                  <Text size="s" as="p" className="!text-blue_gray-800_01">
                    Two-factor Authentication
                  </Text>
                  <div className="flex sm:flex-col items-center mt-[18px] gap-5">
                    <Switch variant="swtFillTealA400" shape="square" />
                    <Text as="p">Enable or disable two factor authentication</Text>
                  </div>
                  <Text size="s" as="p" className="mt-[29px] !text-blue_gray-800_01">
                    Change Password
                  </Text>
                  <div className="flex flex-col mt-[13px] gap-2.5">
                    <Text as="p">Current Password</Text>
                    <Input
                      shape="round"
                      type="password"
                      name="password"
                      placeholder="**********"
                      className="sm:pr-5 border-teal-50 border border-solid"
                    />
                  </div>
                  <div className="flex flex-col mt-[21px] gap-2.5">
                    <Text as="p">New Password</Text>
                    <Input
                      shape="round"
                      type="password"
                      name="newpassword"
                      placeholder="**********"
                      className="sm:pr-5 border-teal-50 border border-solid"
                    />
                  </div>
                </div>
                <Button color="indigo_A700" size="sm" shape="round" className="w-full ml-[860px] sm:px-5 font-medium">
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
