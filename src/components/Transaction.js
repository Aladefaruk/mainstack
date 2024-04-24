/** @format */

import React from "react";
import In from "../assets/icons/in.svg";
import Out from "../assets/icons/out.svg";

const Transaction = ({ trans, title, desc, balance, date, type }) => {
  return (
    <div className="flex items-center justify-between mb-7">
      <div className="flex items-center">
        {trans?.type === "deposit" ? (
          <img src={In} alt="trans in" />
        ) : (
          <img src={Out} alt="trans out" />
        )}
        <div className="ml-3">
          <h2 className="text-[16px] font-[500] text-[#131316] tracking-[-0.2px]">
            {trans?.type !== "deposit" ? "Cash withdrawal " : title}{" "}
          </h2>
          <p
            className={
              "text-[16px] font-[500] capitalize tracking-[-0.2px] mt-1.5"
            }
            style={{
              color:
                trans?.status === "successful" && !trans?.metadata
                  ? "#0EA163"
                  : trans?.status === "pending" && !trans?.metadata
                  ? "#A77A07"
                  : "#56616B",
            }}
          >
            {" "}
            {trans.type !== "deposit" ? trans?.status : desc}{" "}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-[16px] font-[700] text-[#131316] tracking-[-0.2px]">
          USD {balance}
        </h2>
        <p className="text-[16px] font-[500] text-[#56616B] tracking-[-0.2px] mt-3">
          {/* Apr 03,2022 */}
          {date}
        </p>
      </div>{" "}
    </div>
  );
};

export default Transaction;
