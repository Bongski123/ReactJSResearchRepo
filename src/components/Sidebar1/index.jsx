import React from "react";
import { Text, Img } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="231px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      onClick={() => {
        setCollapsed(!collapsed);
      }}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            margin: " ",
            [`&:hover, &.ps-active`]: { color: "#1814f3", fontWeight: "500 !important" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "5px" } }}
        className="flex flex-col items-center w-full mb-[418px]"
      >
        <div className="flex self-end justify-end gap-5 py-[15px]">
          <Img src="images/defaultNoData.png" alt="vector_one" className="h-[20px] w-[20px]" />
          <Text size="xl" as="p" className="!text-gray-400">
            Dashboard
          </Text>
        </div>
        <div className="flex self-end justify-end gap-5 py-[15px]">
          <Img src="images/img_glyph.svg" alt="glyph_one" className="h-[20px] w-[20px]" />
          <Text size="xl" as="p" className="!text-gray-400">
            Transactions
          </Text>
        </div>
        <div className="flex self-end justify-end gap-5 py-[15px]">
          <Img src="images/img_user_3_1.svg" alt="user3one_one" className="h-[20px] w-[20px]" />
          <Text size="xl" as="p" className="!text-gray-400">
            Accounts
          </Text>
        </div>
        <div className="flex self-end justify-end gap-5 py-[15px]">
          <Img src="images/img_group.svg" alt="image" className="h-[20px] w-[20px]" />
          <Text size="xl" as="p" className="!text-gray-400">
            Investments
          </Text>
        </div>
        <div className="flex self-end justify-end gap-5 py-[15px]">
          <Img src="images/img_credit_card_1.svg" alt="creditcardone" className="h-[20px] w-[20px]" />
          <Text size="xl" as="p" className="!text-gray-400">
            Credit Cards
          </Text>
        </div>
        <div className="flex self-end justify-end gap-5 p-2">
          <Img src="images/img_loan_1.svg" alt="loanone_one" className="h-[20px] w-[20px] my-1.5" />
          <Text size="xl" as="p" className="!text-gray-400">
            Loans
          </Text>
        </div>
        <div className="flex self-end justify-end gap-5 py-[15px]">
          <Img src="images/img_service_1.svg" alt="serviceone_one" className="h-[20px] w-[20px]" />
          <Text size="xl" as="p" className="!text-gray-400">
            Services
          </Text>
        </div>
        <div className="flex self-end justify-end gap-5 py-[15px]">
          <Img src="images/img_econometrics_1.svg" alt="econometricsone" className="h-[20px] w-[20px]" />
          <Text size="xl" as="p" className="!text-gray-400">
            My Privileges
          </Text>
        </div>
        <div className="flex self-end justify-end gap-5 py-[15px]">
          <Img src="images/defaultNoData.png" alt="vector_three" className="h-[20px] w-[20px]" />
          <Text size="xl" as="p" className="!text-gray-400">
            Setting
          </Text>
        </div>
      </Menu>
    </Sidebar>
  );
}
