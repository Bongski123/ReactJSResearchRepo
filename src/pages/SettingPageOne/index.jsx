import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Img } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import { SelectBox } from "../../components/SelectBox/index";


const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SettingPageOnePage() {
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
              <div className="mb-[146px] p-[30px] sm:p-5 bg-white-A700 rounded-[25px]">
                <div className="flex flex-col mt-1.5 gap-[51px]">
                  <div>
                    <div className="flex flex-col">
                      <div className="flex justify-between w-[38%] md:w-full ml-4 gap-5">
                        <Text as="p" className="self-start !text-indigo-A700 !font-medium">
                          Edit Profile
                        </Text>
                        <Text as="p" className="self-start !text-indigo-300 !font-medium">
                          Preferences
                        </Text>
                        <Text as="p" className="self-end !text-indigo-300 !font-medium">
                          Security
                        </Text>
                      </div>
                      <div className="h-[3px] w-[11%] mt-1.5 rounded-tl-[10px] rounded-tr-[10px] z-[1] bg-indigo-A700" />
                      <div className="h-px mt-[-1px] bg-gray-100_01" />
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-center items-start">
                    <div className="flex justify-center w-[14%] md:w-full mt-[3px]">
                      <div className="flex justify-center items-center w-full">
                        <div className="h-[130px] w-[130px] flex-1 relative">
                          <Img
                            src="images/img_image_1.png"
                            alt="imageone_one"
                            className="justify-center h-[130px] w-[130px] left-0 bottom-0 right-0 top-0 m-auto rounded-[50%] absolute"
                          />
                          <Img
                            src="images/img_pexels_christin_130x130.png"
                            alt="pexelschristin"
                            className="justify-center h-[130px] w-[130px] left-0 bottom-0 right-0 top-0 m-auto rounded-[50%] absolute"
                          />
                        </div>
                        <Button color="indigo_A700" size="xs" shape="circle" className="self-end w-[30px]">
                          <Img src="images/img_group_194.svg" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col ml-[53px] gap-[21px] flex-1">
                      <div className="flex flex-col gap-2.5">
                        <Text as="p">Your Name</Text>
                        <Input
                          shape="round"
                          name="name"
                          placeholder="Charlene Reed "
                          className="sm:pr-5 border-teal-50 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <Text as="p">Email</Text>
                        <Input
                          shape="round"
                          name="email"
                          placeholder="charlenereed@gmail.com "
                          className="sm:pr-5 border-teal-50 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <Text as="p">Date of Birth</Text>
                        <SelectBox
                          shape="round"
                          indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                          name="dateOfBirth"
                          placeholder="25 January 1990"
                          options={dropDownOptions}
                          className="gap-px sm:pr-5 border-teal-50 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <Text as="p">Permanent Address</Text>
                        <Input
                          shape="round"
                          name="address"
                          placeholder="San Jose, California, USA"
                          className="sm:pr-5 border-teal-50 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <Text as="p">Postal Code</Text>
                        <Input
                          shape="round"
                          name="zipcode"
                          placeholder="45962"
                          className="sm:pr-5 border-teal-50 border border-solid"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-end ml-[29px] flex-1">
                      <div className="flex flex-col self-stretch gap-2.5">
                        <Text as="p">User Name</Text>
                        <Input
                          shape="round"
                          name="userName"
                          placeholder="Charlene Reed "
                          className="sm:pr-5 border-teal-50 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col self-stretch mt-[21px] gap-2.5">
                        <Text as="p">Password</Text>
                        <Input
                          shape="round"
                          type="password"
                          name="password"
                          placeholder="**********"
                          className="sm:pr-5 border-teal-50 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col self-stretch mt-[21px] gap-2.5">
                        <Text as="p">Present Address</Text>
                        <Input
                          shape="round"
                          name="address"
                          placeholder="San Jose, California, USA"
                          className="sm:pr-5 border-teal-50 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col self-stretch mt-[22px] gap-[9px]">
                        <Text as="p">City</Text>
                        <Input
                          shape="round"
                          name="city"
                          placeholder="San Jose"
                          className="sm:pr-5 border-teal-50 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col self-stretch mt-[22px] gap-[9px]">
                        <Text as="p">Country</Text>
                        <Input
                          shape="round"
                          name="country"
                          placeholder="USA"
                          className="sm:pr-5 border-teal-50 border border-solid"
                        />
                      </div>
                      <Button
                        color="indigo_A700"
                        size="sm"
                        shape="round"
                        className="mt-[30px] sm:px-5 font-medium min-w-[190px]"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
