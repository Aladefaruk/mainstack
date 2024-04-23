/** @format */

import React from "react";
import In from "../assets/icons/in.svg";
import Out from "../assets/icons/out.svg";

const Transaction = ({ trans, title, desc }) => {
  return (
    <div className="flex items-center justify-between mb-7">
      <div className="flex items-center">
        {trans === "in" ? (
          <img src={In} alt="trans in" />
        ) : (
          <img src={Out} alt="trans out" />
        )}
        <div className="ml-3">
          <h2 className="text-[16px] font-[500] text-[#131316] tracking-[-0.2px]">
            {" "}
            {title}{" "}
          </h2>
          <p
            className={
              "text-[16px] font-[500] capitalize tracking-[-0.2px] mt-1.5"
            }
            style={{
              color:
                desc === "successful"
                  ? "#0EA163"
                  : desc === "pending"
                  ? "#A77A07"
                  : "#56616B",
            }}
          >
            {" "}
            {desc}{" "}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-[16px] font-[700] text-[#131316] tracking-[-0.2px]">
          USD 600
        </h2>
        <p className="text-[16px] font-[500] text-[#56616B] tracking-[-0.2px] mt-3">
          Apr 03,2022
        </p>
      </div>{" "}
    </div>
  );
};

export default Transaction;
