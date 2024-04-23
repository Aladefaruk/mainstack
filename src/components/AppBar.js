/** @format */

import React from "react";
import { appbar1, appbar2, appbar3, appbar4 } from "../assets/icons";

const AppBar = () => {
  return (
    <div
      className="py-2 flex flex-col justify-center items-center grid gap-[4px] px-2"
      style={{
        width: "48px",
        height: "192px",
        gap: "4px",
        borderRadius: "100px",
        boxShadow: "0px 6px 12px 0px #5C738314",
        boxShadow: "0px 4px 8px 0px #5C738314",
      }}
    >
      <img src={appbar1} alt="app bar" width="24px" height="24px" />
      <img src={appbar2} alt="app bar" width="24px" height="24px" />
      <img src={appbar3} alt="app bar" width="24px" height="24px" />
      <img src={appbar4} alt="app bar" width="24px" height="24px" />
    </div>
  );
};

export default AppBar;
