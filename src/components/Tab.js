/** @format */

import React from "react";

const Tab = ({ active, index, tab }) => {
  const Styles = {
    active: {
      background: "#131316",
      borderRadius: "100px",
      color: "#FFFFFF",
      fontWeight: "600",
      fontSize: "14px",
      letterSpacing: "-0.4px",
    },
    inactive: {
      color: "#56616B",
      fontWeight: "600",
      fontSize: "14px",
      letterSpacing: "-0.4px",
    },
  };
  return (
    <div
      className="flex items-center p-2 px-4 mx-1 cursor-pointer"
      style={active === index ? Styles.active : Styles.inactive}
    >
      <img src={tab.icon} alt="" width="20px" height="20px" />

      <p className="ml-1">{tab.tab_name}</p>
    </div>
  );
};
export default Tab;
