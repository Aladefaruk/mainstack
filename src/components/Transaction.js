/** @format */

import React from "react";
import In from "../assets/icons/in.svg";
import Out from "../assets/icons/out.svg";

const Transaction = ({ trans, title, desc, balance, date, type }) => {
    const FormatDate = (inputDate) => {
      const parts = inputDate.split("-");
      const year = parseInt(parts[0]);
      const month = parseInt(parts[1]);
      const day = parseInt(parts[2]);

      const date = new Date(year, month - 1, day);

      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const monthName = monthNames[date.getMonth()];

      // Format the date
      const formattedDate =
        monthName +
        " " +
        ("0" + date.getDate()).slice(-2) +
        ", " +
        date.getFullYear();

      return formattedDate;
    };
    const FormatAmount=(amount, decimalPlaces = 2)=> {
      // Convert the amount to a number
      amount = parseFloat(amount);

      // Check if the amount is a valid number
      if (isNaN(amount)) {
        return "Invalid amount";
      }

      // Format the amount with commas for thousands separators and specified decimal places
      return amount.toLocaleString(undefined, {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      });
    }
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
          USD {FormatAmount(balance)}
        </h2>
        <p className="text-[16px] font-[500] text-[#56616B] tracking-[-0.2px] mt-3">
          {FormatDate(date)}
        </p>
      </div>{" "}
    </div>
  );
};

export default Transaction;
