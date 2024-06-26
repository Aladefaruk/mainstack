/** @format */

import React, { useEffect, useState } from "react";
import Header from "./Header";
import AppBar from "../components/AppBar";
import Graph from "../components/Graph";
import Transactions from "./Transactions";
import { Audio } from "react-loader-spinner";

const Content = () => {
  const [user, setUser] = useState(null);
  const [wallet, setWalletBalance] = useState(null);
  const [transactions, setTransactions] = useState(null);

  const WalletDetails = [
    {
      title: "Ledger Balance",
      amount: wallet?.ledger_balance,
    },
    {
      title: "Total Payout",
      amount: wallet?.total_payout,
    },
    {
      title: "Total Revenue",
      amount: wallet?.total_revenue,
    },
    {
      title: "Pending Payout",
      amount: wallet?.pending_payout,
    },
  ];
  useEffect(() => {
    fetch("https://fe-task-api.mainstack.io/" + "user", {
      method: "GET",
      headers: {},
      credentials: "same-origin",
    })
      .then(function (response) {
        return response.json();
      })
      .then((res) => {
        setUser(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://fe-task-api.mainstack.io/" + "wallet", {
      method: "GET",
      headers: {},
      credentials: "same-origin",
    })
      .then(function (response) {
        return response.json();
      })
      .then((res) => {
        setWalletBalance(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://fe-task-api.mainstack.io/" + "transactions", {
      method: "GET",
      headers: {},
      credentials: "same-origin",
    })
      .then(function (response) {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setTransactions(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
     const FormatAmount = (amount, decimalPlaces = 2) => {
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
     };
  return (
    <>
      {!user || !wallet || !transactions ? (
        <div className="w-1/3 flex justify-center mx-auto py-20">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="#131316"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <div className=" w-full">
          <Header user={user} />
          <div className="flex justify-between mt-20 relative w-full">
            <div className="hidden lg:flex absolute left-2  top-20 lg:top-60">
              <AppBar />
            </div>
            <div className="w-5/6 mx-auto">
              <div className="w-full lg:flex items-end justify-between ">
                <div className="w-full lg:w-3/5 ">
                  <div className=" flex items-center ">
                    <div className="mr-10">
                      <p className="text-[#56616B] text-[14px] font-[500]">
                        {" "}
                        Available Balance
                      </p>
                      <h1
                        className="text-[#131316] text-[36px] font-[700] "
                        style={{ letterSpacing: "-1.5px" }}
                      >
                        USD {wallet?.balance}
                      </h1>
                    </div>

                    <button className="bg-[#131316] rounded-[100px] text-[10px] font-[660] text-[#fff] py-4 px-10">
                      Withdraw
                    </button>
                  </div>
                  <div className="w-full mt-7 mb-10 ">
                    <Graph />
                  </div>
                </div>

                <div className="lg:w-[271px] mb-10">
                  {WalletDetails.map((details, index) => (
                    <div key={index} className="my-5">
                      <div className="">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-[#56616B] text-[14px] font-[500]">
                            {details.title}{" "}
                          </p>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00017 11.9583C8.17734 11.9583 8.32575 11.8984 8.4454 11.7786C8.56505 11.6588 8.62488 11.5104 8.62488 11.3333V7.79164C8.62488 7.61457 8.56496 7.46614 8.44513 7.34634C8.32528 7.22655 8.17678 7.16666 7.99963 7.16666C7.82246 7.16666 7.67405 7.22655 7.5544 7.34634C7.43475 7.46614 7.37492 7.61457 7.37492 7.79164V11.3333C7.37492 11.5104 7.43484 11.6588 7.55467 11.7786C7.67452 11.8984 7.82302 11.9583 8.00017 11.9583ZM7.9999 5.74039C8.19061 5.74039 8.35046 5.67589 8.47946 5.54689C8.60846 5.41789 8.67296 5.25803 8.67296 5.06732C8.67296 4.87663 8.60846 4.71678 8.47946 4.58776C8.35046 4.45876 8.19061 4.39426 7.9999 4.39426C7.80919 4.39426 7.64934 4.45876 7.52034 4.58776C7.39134 4.71678 7.32684 4.87663 7.32684 5.06732C7.32684 5.25803 7.39134 5.41789 7.52034 5.54689C7.64934 5.67589 7.80919 5.74039 7.9999 5.74039ZM8.00129 15.9166C6.90635 15.9166 5.87715 15.7089 4.91371 15.2933C3.95025 14.8777 3.11218 14.3138 2.3995 13.6014C1.68681 12.8891 1.12259 12.0514 0.706856 11.0883C0.29112 10.1253 0.083252 9.09633 0.083252 8.00139C0.083252 6.90644 0.29103 5.87725 0.706585 4.9138C1.12214 3.95034 1.6861 3.11228 2.39846 2.39959C3.11084 1.6869 3.94854 1.12268 4.91156 0.706949C5.87458 0.291212 6.90356 0.0833435 7.9985 0.0833435C9.09345 0.0833435 10.1226 0.291122 11.0861 0.706678C12.0495 1.12223 12.8876 1.68619 13.6003 2.39855C14.313 3.11093 14.8772 3.94863 15.2929 4.91166C15.7087 5.87467 15.9165 6.90365 15.9165 7.99859C15.9165 9.09354 15.7088 10.1227 15.2932 11.0862C14.8777 12.0496 14.3137 12.8877 13.6013 13.6004C12.889 14.3131 12.0513 14.8773 11.0882 15.293C10.1252 15.7088 9.09624 15.9166 8.00129 15.9166ZM7.9999 14.6667C9.86101 14.6667 11.4374 14.0208 12.7291 12.7292C14.0207 11.4375 14.6666 9.8611 14.6666 7.99999C14.6666 6.13888 14.0207 4.56249 12.7291 3.27082C11.4374 1.97916 9.86101 1.33332 7.9999 1.33332C6.13879 1.33332 4.5624 1.97916 3.27073 3.27082C1.97906 4.56249 1.33323 6.13888 1.33323 7.99999C1.33323 9.8611 1.97906 11.4375 3.27073 12.7292C4.5624 14.0208 6.13879 14.6667 7.9999 14.6667Z"
                              fill="#888F95"
                            />
                          </svg>
                        </div>
                        <h1
                          className="text-[#131316] text-[28px] font-[700] "
                          style={{ letterSpacing: "-1.5px" }}
                        >
                          USD {FormatAmount(details.amount)}
                        </h1>
                      </div>{" "}
                    </div>
                  ))}
                </div>
              </div>

              <Transactions transactions={transactions} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
