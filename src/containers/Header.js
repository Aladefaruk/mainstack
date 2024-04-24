/** @format */

import React from "react";
import Logo from "../components/Logo";
import Tabs from "./Tabs";
import { bell, chat, menu } from "../assets/icons";

const Header = ({ user }) => {
  return (
    <div className="header_container py-3 px-2 my-5  flex items-center justify-between mx-5">
      <Logo />
      
      <Tabs />
      <div className="flex items-center">
        <img src={bell} alt="notification" />
        <img src={chat} alt="notification" className="ml-7 mr-4" />
        <div className="bg-[#EFF1F6] rounded-[100px] flex items-center p-1 px-2">
          <div
            className="rounded-full w-[32px] h-[32px] text-center text-[#fff] flex items-center justify-center "
            style={{
              background:
                "linear-gradient(138.98deg, #5C6670 2.33%, #131316 96.28%)",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {user?.first_name[0]}
            {user?.last_name[0]}
          </div>
          <img src={menu} alt="menu" className="mx-2 ml-3 w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
};
export default Header;
