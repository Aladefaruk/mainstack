/** @format */

import React from "react";
import EmptyIcon from "../assets/icons/empty.svg";

const Empty = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full">
        <img src={EmptyIcon} alt="empty..." />

        <h1 className="text-[#131316] text-[28px] my-5">
          No matching transaction found for the selected filter
        </h1>

        <p className="text-[#56616B] text-[16px] my-5">
          Change your filters to see more results, or add a new product.
        </p>

        <div className="flex text-center items-center justify-around bg-[#EFF1F6] rounded-[100px] py-3.5 px-7 text-[#131316] font-[500] w-2/5 text-[14px]">
          Clear Filter
        </div>
      </div>
    </div>
  );
};

export default Empty;
