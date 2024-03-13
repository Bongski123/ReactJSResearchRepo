import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Input, Button } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import User from '../User'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Navbar, Nav, Modal } from 'react-bootstrap';
import PublicationList from "../PublicationList";

export default function MainDashboardPage() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [showChartModal, setShowChartModal] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = JSON.parse(localStorage.getItem('token'));
                setUser(response.data);

                const decoded_token = jwtDecode(response.data.token);
                setUser(decoded_token);
            } catch (error) {
                navigate('/login');
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async (e) => {
        try {
            localStorage.removeItem('token');
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    const handleProfileClick = () => {
      // Add your logic here to handle the profile click event
      // For example, you can navigate to the user's profile page
      // or open a dropdown menu with profile options
      console.log('Profile clicked');
    };
    

  return (
    <>
      <Helmet>
        <title>ResearchNexus</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div class="w-full bg-gray" color="grey">
        <div className="self-end">
          <header>
            <div className="flex flex-col items-center justify-center">
              <div className="self-stretch p-7 bg-white- A700" >
                
                <div className="flex md:flex-col justify-between items-start gap-5">
                  
                  <div className="flex justify-center items-center mt-[11px] gap-[9px]">

                  </div>
                  <div className="flex md:flex-col justify-between items-center w-[100%] md:w-full gap-5 ">
                  <Img
                      src="images/header2.png"
                      alt="iconfindervect"
                      className="w-[400px] object-cover "
                    />
                
                    <div className="flex sm:flex-col justify-between items-center w-[60%] md:w-full gap-5">
                      <Input
                        color="white"
                        size="sm"
                        name="search"
                        placeholder="Search for something"
                        value={searchBarValue2}
                        onChange={(e) => setSearchBarValue2(e)}
                        prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
                        suffix={
                          searchBarValue2?.length > 0 ? (
                            <CloseSVG onClick={() => setSearchBarValue2("")} fillColor="#718ebfff" />
                          ) : null
                        }
                        className="w-[50%] gap-[15px] sm:px-5 text-white-200"
                      />
                      <Button size="3xl" shape="circle" className="w-[50px]"   color="white">
                        <Img src="images/img_settings_1.svg" />
                      </Button>
                      <Button size="3xl" shape="circle" className="w-[50px]"    color="white">
                        <Img src="images/img_002_notification_1.svg" />
                      </Button>
                      <div className="flex items-center">

                         <Navbar.Text className='nav-text'>
                        Welcome: {user ? user.user_id : 'id'} {user ? user.name : 'name'}
                       </Navbar.Text>

                         <Button variant='secondary' onClick={handleLogout}>Logout</Button>

                          </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-[83%] bg-white-50_01" />
            </div>
          </header>
          <div className="flex md:flex-col justify-center items-start">
            <Sidebar
              width="252px !important"
              collapsedWidth="80px !important"
              collapsed={collapsed}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              className="flex flex-col h-screen top-0 py-[13px] !sticky overflow-auto"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "17px 12px",
                    gap: "26px",
                    alignSelf: "end",
                    color: "#1E5D39",
                    fontWeight: 600,
                    fontSize: "18px",
                    [`&:hover, &.ps-active`]: { color: "white" },
                  },
                }}
                rootStyles={{ ["&>ul"]: { gap: "4px" } }}
                className="flex flex-col items-center w-full mb-[602px]"
              >
                <MenuItem icon={<Img src="images/img_vector.svg" alt="vector_one" className="h-[25px] w-[25px]" />}>
                  Dashboard
                </MenuItem>
               
                <MenuItem icon={<Img src="images/img_user_3_1.svg" alt="user3one_one" className="h-[25px] w-[25px]" />}>
                  Accounts
                </MenuItem>

                <MenuItem
                  icon={<Img src="images/img_econometrics_1.svg" alt="econometricsone" className="h-[25px] w-[25px]" />}
                >
                  My Privileges
                </MenuItem>
                <MenuItem icon={<Img src="images/img_vector_gray_400.svg" alt="vector_three" className="h-[25px] w-[25px]" />}>
                <Link to="/SettingPageOnePage" style={{ textDecoration: 'none', color: '#1E5D39' }}>Setting</Link>
               </MenuItem>

              </Menu>
            </Sidebar>
            <div className="p-6 sm:p-5 bg-gray-100 flex-1">
              <div className="flex flex-col mb-3.5 gap-[25px]">
                <div className="flex md:flex-col justify-center items-center gap-[30px]">
                  <div className="flex-1">
                    <div className="flex flex-col gap-[17px]">
                      <div className="flex justify-between items-center gap-5">
                        <Heading as="h1">User List</Heading>
                
                      </div>
                      <div className="flex md:flex-col justify-center gap-[30px]  w-[840px]">
                        <div className="w-full pt-6 sm:pt-5 bg-gradient1 rounded-[25px]">
                          <div className="flex flex-col items-center gap-[35px]">
                            <div className="flex flex-col w-[100%] md:w-full gap-[31px]">
                              <div className="flex justify-between items-center gap-5">
                                <div className="flex flex-col items-start">
                                <User/>
                              
                                </div>
                                
                              </div>
                          
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[32%] md:w-full gap-[19px]">
                    
                    <Heading as="h3">Recent Published</Heading>
                    <div className="p-6 sm:p-5 bg-white-A700 rounded-[45px]   w-[400px]">
               
                      <div className="flex flex-col gap-2.5">
                        <div className="flex justify-center flex-1">
                          <div className="flex justify-center items-center">
                          <PublicationList/>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          
                          <div className="flex flex-col items-start ml-[17px] gap-[7px]">
                            
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col justify-center gap-[30px]">
                  <div className="flex flex-col gap-[15px] flex-1">
                    <Heading as="h4">Weekly Activity</Heading>
                    <div className="p-[26px] sm:p-5 bg-white-A700 rounded-[25px]">
                      <div className="flex flex-col items-end gap-5">
                        <div className="flex justify-end w-[30%] md:w-full gap-[30px]">
                          <div className="flex self-end justify-end items-center w-[45%] gap-2.5">
                            <div className="self-start h-[15px] w-[15px] bg-teal-A400_01 rounded-[7px]" />
                            <Text size="lg" as="p">
                              Read
                            </Text>
                          </div>
                          <div className="flex self-start justify-end items-center w-[45%] gap-2.5 ">
                            <div className="self-end h-[15px] w-[15px] bg-blue-A700 rounded-[7px]" />
                            <Text size="lg" as="p">
                              Cite
                            </Text>
                          </div>
                        </div>
                        <div className="self-stretch h-[226px] relative">
                          <div className="flex flex-col w-[95%] gap-9 right-0 top-[3%] m-auto absolute">
                            <div className="h-px bg-gray-100_03" />
                            <div className="h-px bg-gray-100_03" />
                            <div className="h-px bg-gray-100_03" />
                            <div className="h-px bg-gray-100_03" />
                            <div className="h-px bg-gray-100_03" />
                            <div className="h-px bg-gray-100_03" />
                          </div>
                          <div className="flex justify-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <div className="flex flex-col items-end w-full gap-2">
                              <div className="flex md:flex-col self-stretch justify-between items-center gap-5">
                                <div className="flex flex-col items-center gap-[3px]">
                                  <Text as="p" className="text-right">
                                    500
                                  </Text>
                                  <Text as="p" className="text-right">
                                    400
                                  </Text>
                                  <Text as="p" className="text-right">
                                    300
                                  </Text>
                                  <Text as="p" className="text-right">
                                    200
                                  </Text>
                                  <Text as="p" className="self-start text-right">
                                    100
                                  </Text>
                                  <Text as="p" className="self-end text-right">
                                    0
                                  </Text>
                                </div>
                                <Img src="images/img_group_39.svg" alt="image_three" className="h-[200px] md:w-full" />
                              </div>
                              <div className="flex justify-between w-[89%] md:w-full mr-[13px] gap-5">
                                <Text as="p" className="text-center">
                                  Sat
                                </Text>
                                <Text as="p" className="text-center">
                                  Sun
                                </Text>
                                <Text as="p" className="text-center">
                                  Mon
                                </Text>
                                <Text as="p" className="text-center">
                                  Tue
                                </Text>
                                <Text as="p" className="text-center">
                                  Wed
                                </Text>
                                <Text as="p" className="text-center">
                                  Thu
                                </Text>
                                <Text as="p" className="h-[16px] text-center">
                                  Fri
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[32%] md:w-full gap-[15px]">
                    <Heading as="h5"> Statistics</Heading>
                    <div className="p-[31px] sm:p-5 bg-white-A700 rounded-[25px]">
                      <div className="h-[259px] relative">
                        <Img
                          src="images/img_group_blue_gray_800.svg"
                          alt="image_four"
                          className="justify-center h-[259px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <div className="flex flex-col w-[85%] gap-[9px] top-[13%] right-0 left-0 m-auto absolute">
                          <Text
                            as="p"
                            className="flex w-[56%] md:w-full ml-12 !text-white-A700 text-center !font-medium leading-[18px]"
                          >
                            <span className="text-white-A700 text-base font-bold">
                              <>
                                30%
                                <br />
                              </>
                            </span>
                            <span className="text-white-A700 font-bold">Entertainment</span>
                          </Text>
                          <Text
                            as="p"
                            className="flex ml-[143px] !text-white-A700 text-center !font-medium leading-[18px]"
                          >
                            <span className="text-white-A700 text-base font-bold">
                              <>
                                15%
                                <br />
                              </>
                            </span>
                            <span className="text-white-A700 font-bold">Bill Expense</span>
                          </Text>
                          <div className="flex justify-between w-[82%] md:w-full gap-5">
                            <Text
                              as="p"
                              className="flex w-[42%] mb-[30px] !text-white-A700 text-center !font-medium leading-[18px]"
                            >
                              <span className="text-white-A700 text-base font-bold">
                                <>
                                  20%
                                  <br />
                                </>
                              </span>
                              <span className="text-white-A700 font-bold">Investment</span>
                            </Text>
                            <Text
                              as="p"
                              className="flex w-[26%] mt-[30px] !text-white-A700 text-center !font-medium leading-[18px]"
                            >
                              <span className="text-white-A700 text-base font-bold">
                                <>
                                  35%
                                  <br />
                                </>
                              </span>
                              <span className="text-white-A700 font-bold">Others</span>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col justify-center items-center gap-[30px]">
                  <div className="flex flex-col w-[41%] md:w-full gap-[19px]">
                    <Heading as="h6">Recent Readers</Heading>
                    <div className="flex flex-col gap-[27px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                      <div className="flex justify-between items-center mt-2.5 gap-5">
                        <div className="flex flex-col w-[22%] gap-3.5">
                          <div className="ml-[5px]">
                            <Img
                              src="images/img_pexels_julia_volk_5273755.png"
                              alt="pexelsjulia_one"
                              className="h-[70px] w-[70px] rounded-[50%]"
                            />
                          </div>
                          <div className="flex flex-col self-center items-center gap-[5px]">
                            <Text size="xl" as="p" className="!text-gray-900 !font-normal">
                              Livia Bator
                            </Text>
                            <Text size="lg" as="p">
                              CEO
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center w-[24%] gap-[15px]">
                          <div className="w-[74%] md:w-full">
                            <Img
                              src="images/img_marcel_strauss.png"
                              alt="marcelstrauss"
                              className="h-[70px] w-[70px] rounded-[50%]"
                            />
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <Text size="xl" as="p" className="!text-gray-900 !font-normal">
                              Randy Press
                            </Text>
                            <Text size="lg" as="p">
                              Director
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col w-[18%] gap-3.5">
                          <div>
                            <div>
                              <div>
                                <Img
                                  src="images/img_austin_distel_7.png"
                                  alt="austindistelsev"
                                  className="h-[70px] w-[70px] rounded-[50%]"
                                />
                                <Img
                                  src="images/img_emanuel_minca_j.png"
                                  alt="emanuelmincaj"
                                  className="h-[70px] w-[70px] mt-[-70px] rounded-[50%]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center gap-[5px]">
                            <Text size="xl" as="p" className="!text-gray-900 !font-normal">
                              Workman
                            </Text>
                            <Text size="lg" as="p">
                              Designer
                            </Text>
                          </div>
                        </div>
                        <Button color="white_A700" size="3xl" shape="circle" className="w-[50px]">
                          <Img src="images/img_arrow_right.svg" />
                        </Button>
                      </div>
                      <div className="flex sm:flex-col justify-center items-center mb-2.5 gap-[27px]">
                        <Text size="xl" as="p" className="!font-normal">
                          Write Amount
                        </Text>
                        <Input
                          color="blue_gray_50"
                          size="sm"
                          name="vector_four"
                          placeholder="525.50"
                          suffix={
                            <div className="flex justify-center items-center w-[26px] h-[22px]">
                              <Img src="images/img_vector_white_a700.svg" alt="Vector" />
                            </div>
                          }
                          className="gap-[35px] sm:px-5 flex-1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] flex-1">
                    <Heading as="h5">Readers Peak</Heading>
                    <div className="p-[23px] sm:p-5 bg-white-A700 rounded-[25px]">
                      <div className="mt-[3px] mb-1">
                        <div className="flex sm:flex-col justify-center items-start">
                          <div className="flex flex-col items-end w-[7%] sm:w-full gap-[30px] z-[1]">
                            <div className="flex self-stretch justify-end items-center gap-2">
                              <Text as="p" className="text-right">
                                800
                              </Text>
                              <div className="h-px w-[21%] bg-indigo-300" />
                            </div>
                            <div className="flex self-stretch justify-end items-center gap-2">
                              <Text as="p" className="text-right">
                                600
                              </Text>
                              <div className="h-px w-[21%] bg-indigo-300" />
                            </div>
                            <div className="flex self-stretch justify-end items-center gap-2">
                              <Text as="p" className="text-right">
                                400
                              </Text>
                              <div className="h-px w-[20%] bg-indigo-300" />
                            </div>
                            <div className="flex self-stretch justify-end items-center gap-[7px]">
                              <Text as="p" className="text-right">
                                200
                              </Text>
                              <div className="h-px w-[21%] bg-indigo-300" />
                            </div>
                            <div className="flex justify-end items-center w-[58%] md:w-full gap-2">
                              <Text size="xs" as="p" className="text-right">
                                0
                              </Text>
                              <div className="self-end h-px w-full bg-indigo-300" />
                            </div>
                          </div>
                          <div className="flex flex-col mt-[7px] ml-[-1px] flex-1">
                            <div className="h-[185px] relative">
                              <Img
                                src="images/img_group_indigo_50.svg"
                                alt="image_five"
                                className="justify-center h-[185px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <Img
                                src="images/img_vector_indigo_a700_02_177x547.png"
                                alt="vector_sixteen"
                                className="justify-center h-[177px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                              />
                            </div>
                            <div className="flex w-[90%] md:w-full">
                              <div className="flex flex-col w-full gap-1">
                                <div className="flex justify-between gap-5">
                                  <Img src="images/img_group_indigo_300.svg" alt="image_six" className="h-[4px]" />
                                  <Img src="images/img_group_indigo_300.svg" alt="image_seven" className="h-[4px]" />
                                  <Img src="images/img_group_indigo_300.svg" alt="image_eight" className="h-[4px]" />
                                  <Img src="images/img_group_indigo_300.svg" alt="image_nine" className="h-[4px]" />
                                  <Img src="images/img_group_indigo_300.svg" alt="image_ten" className="h-[4px]" />
                                  <Img src="images/img_group_indigo_300.svg" alt="image_eleven" className="h-[4px]" />
                                  <Img src="images/img_group_indigo_300.svg" alt="image_twelve" className="h-[4px]" />
                                </div>
                                <div className="flex sm:flex-col justify-between gap-5">
                                  <div className="flex justify-between w-[19%] sm:w-full gap-5">
                                    <Text size="md" as="p" className="self-start h-[17px]">
                                      Jul
                                    </Text>
                                    <Text size="md" as="p" className="self-end">
                                      Aug
                                    </Text>
                                  </div>
                                  <div className="flex justify-between w-[68%] sm:w-full gap-5">
                                    <Text size="md" as="p" className="self-end">
                                      Sep
                                    </Text>
                                    <Text size="md" as="p" className="self-start">
                                      Oct
                                    </Text>
                                    <Text size="md" as="p" className="self-start">
                                      Nov{" "}
                                    </Text>
                                    <Text size="md" as="p" className="self-start">
                                      Dec
                                    </Text>
                                    <Text size="md" as="p" className="self-start">
                                      Jan
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
