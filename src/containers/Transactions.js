/** @format */

import React from "react";
import FilterButton from "../components/FilterButton";
import ExportButton from "../components/ExportButton";
import { TransactionData } from "../Data";
import Transaction from "../components/Transaction";

const Transactions = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between border-b-[1px] pb-7 my-10 border-[#EFF1F6]">
        <div>
          <h1
            className="text-[#131316] text-[24px] font-[700] "
            style={{ letterSpacing: "-0.6px" }}
          >
            3 Transactions
          </h1>{" "}
          <p className="text-[#56616B] text-[14px] font-[500]">
            Your transactions for All Time{" "}
          </p>
        </div>

        <div className="flex items-center">
          <div>
            <FilterButton />
          </div>
          <div className="ml-3">
            {" "}
            <ExportButton />
          </div>
        </div>
      </div>

      <div className="w-full">
        {TransactionData.map((transc, index) => (
          <div>
            <Transaction
              trans={transc.trans}
              title={transc.title}
              desc={transc.desc}
              key={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
