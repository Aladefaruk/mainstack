/** @format */

import React, { useState, useEffect } from "react";
import FilterButton from "../components/FilterButton";
import ExportButton from "../components/ExportButton";
import { TransactionData } from "../Data";
import Transaction from "../components/Transaction";
import Dropdown from "../components/DropDown";
import Close from "../assets/icons/close.svg";
import Calender from "../components/Calender";
import Empty from "../components/Empty";

const Transactions = ({ transactions }) => {
    const [data, setData] = useState(transactions);
    const [activeTab, setActiveTab]= useState(0)
  const [totalFilter, setTotalFilter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    option1: true,
    option2: false,
    option3: false,
  });
  const [selectedItems, setSelectedItems] = useState(["Successful"]);
  const [storeCheckboxes, setStoreCheckboxes] = useState({
    option1: true,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
  });
  const [storeItems, setStoreItems] = useState(["Store Transactions"]);
  console.log(data);
  const Styles = {
    active:
      "flex w-full items-center justify-between bg-[#ffffff] rounded-[12px] p-3 px-5 mx-2 border-[3px] border-[#131316]",
    inactive:
      "flex w-full items-center justify-between bg-[#EFF1F6] rounded-[12px] p-3 px-5 mx-2 cursor-pointer ",
  };
  let filteredData = [];
  const GetTotalFilters = () => {
    setTotalFilter(storeItems.length + selectedItems.length);
    setModalOpen(false);
    let newdata = data.filter(
      (item) => item.type === storeItems[0].toLowerCase()
    );
    setData(newdata);
  };
  const handleStoreCheckboxChange = (option, prop) => {
    setStoreCheckboxes({
      ...storeCheckboxes,
      [option]: !storeCheckboxes[option],
    });

    setStoreItems((prevItems) => {
      if (storeCheckboxes[option]) {
        // Remove the item from the array if checkbox is unchecked
        return prevItems.filter((item) => item !== prop);
      } else {
        // Add the item to the array if checkbox is checked
        return [...prevItems, prop];
      }
    });
    // let newdata = data.filter(
    //   (item) => item.type === storeItems[0].toLowerCase()
    // );
    // filteredData.push(newdata);
  };

  // Function to handle checkbox state changes
  const handleCheckboxChange = (option, prop) => {
    setCheckboxes({
      ...checkboxes,
      [option]: !checkboxes[option],
    });

    setSelectedItems((prevItems) => {
      if (checkboxes[option]) {
        // Remove the item from the array if checkbox is unchecked
        return prevItems.filter((item) => item !== prop);
      } else {
        // Add the item to the array if checkbox is checked
        return [...prevItems, prop];
      }
    });
    // let newdata = data.filter(
    //   (item) => item.status === selectedItems[0].toLowerCase()
    // );
    // console.log("herre---->", newdata);
    // filteredData.push(newdata);
  };
  const handleButtonClick = () => {
    setIsOpen(!isOpen); // Toggle the state when the button is clicked
  };

  const handleCalenderButtonClick = () => {
    setIsCalenderOpen(!isCalenderOpen); // Toggle the state when the button is clicked
  };

  const handleStoreButtonClick = () => {
    setIsStoreOpen(!isStoreOpen); // Toggle the state when the button is clicked
  };
  const handleSelectOption = (option) => {
    console.log("Selected option:", option); // Handle the selected option here
    setIsOpen(false); // Close the dropdown after an option is selected
  };

  const modalClasses = isModalOpen
    ? "fixed inset-0 flex items-center justify-center transition-opacity z-40 ease-in-out duration-300 opacity-100 w-full mx-auto modal"
    : "fixed inset-0 flex items-center justify-center transition-opacity ease-in-out duration-300 opacity-0 pointer-events-none w-full mx-auto modal";
  const closeModal = () => {
    setModalOpen(false);
  };
  const Status = (
    <div className="absolute top-22 w-full">
      <Dropdown
        App={
          <div className="p-7 py-4">
            <div className="flex items-center mb-5">
              <input
                type="checkbox"
                // checked={checkboxes.option1}
                checked={checkboxes.option1}
                onChange={() => handleCheckboxChange("option1", "Successful")}
                className="custom-checkbox"
              />
              <label className="text-[16px] font-[600] ml-5 ">Successful </label>
            </div>
            <div className="flex items-center my-5">
              <input
                type="checkbox"
                // checked={checkboxes.option1}
                onChange={() => handleCheckboxChange("option2", "Pending")}
                className="custom-checkbox"
              />
              <label className="text-[16px] font-[600] ml-5">Pending </label>
            </div>
            <div className="flex items-center my-5">
              <input
                type="checkbox"
                // checked={checkboxes.option1}
                onChange={() => handleCheckboxChange("option3", "Failed")}
                className="custom-checkbox"
              />
              <label className="text-[16px] font-[600] ml-5">Failed </label>
            </div>
          </div>
        }
      />
    </div>
  );
  const Store = (
    <div className="absolute top-22 z-40 bg-white mx-auto w-11/12">
      <Dropdown
        App={
          <div className="p-7 py-4 ">
            <div className="flex items-center mb-5 ">
              <input
                type="checkbox"
                // checked={checkboxes.option1}
                checked={storeCheckboxes.option1}
                onChange={() =>
                  handleStoreCheckboxChange("option1", "Store Transactions")
                }
                className="custom-checkbox"
              />
              <label className="text-[16px] font-[600] ml-5">
                Store Transactions{" "}
              </label>
            </div>
            {[
              {
                opt: "option2",
                ki: "Get Tipped",
              },
              {
                opt: "option3",
                ki: "Withdrawal",
              },
              {
                opt: "option4",
                ki: "Chargebacks",
              },
              {
                opt: "option5",
                ki: "Cashbacks",
              },
              {
                opt: "option6",
                ki: "Refer & Earn",
              },
            ].map((items, index) => (
              <div className="flex items-center mb-5 " key={index}>
                <input
                  type="checkbox"
                  // checked={checkboxes.option1}
                  //   checked={index == 0 && storeCheckboxes.option1}
                  onChange={() =>
                    handleStoreCheckboxChange(items.opt, items.ki)
                  }
                  className="custom-checkbox"
                />
                <label className="text-[16px] font-[600] ml-5">
                  {items.ki}
                </label>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
  useEffect(() => {
    if (transactions) {
      setData(transactions);
    }
  }, [transactions]);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between border-b-[1px] pb-7 my-10 border-[#EFF1F6]">
        <div>
          <h1
            className="text-[#131316] text-[24px] font-[700] "
            style={{ letterSpacing: "-0.6px" }}
          >
            {data?.length} Transactions
          </h1>{" "}
          <p className="text-[#56616B] text-[14px] font-[500]">
            Your transactions for{" "}
            {activeTab===0?"Today":activeTab==1? "Last 7 days":activeTab===2?"This month":"Last 3 months"} 
          </p>
        </div>

        <div className="flex items-center relative">
          <div onClick={() => setModalOpen(true)} className="cursor-pointer">
            <FilterButton filterNo={totalFilter} />
          </div>

          <div className="ml-3 hidden lg:flex">
            {" "}
            <ExportButton />
          </div>
        </div>
      </div>

      {data?.length === 0 ? (
        <div className="w-1/3 mx-auto p-5 my-5">
          <Empty />
        </div>
      ) : (
        <>
          <div className="w-full">
            {data?.map((transc, index) => (
              <div>
                <Transaction
                  type={transc?.type}
                  trans={transc}
                  title={transc?.metadata?.type}
                  desc={transc?.metadata?.name}
                  balance={transc?.amount}
                  date={transc?.date}
                  key={index}
                />
              </div>
            ))}
          </div>

          <div className={modalClasses}>
            <div
              className="absolute inset-0 bg-black opacity-50 w-full "
              onClick={closeModal}
            ></div>
            <div
              //   className=" bg-white  rounded-md z-10 w-full mx-5 lg:w-[456px] rounded-[20px] "
              className="modal bg-white m-auto p-5 border border-gray-300 w-full lg:w-[456px] h-full rounded-2xl z-10 shadow-md animate-fadeInOut relative"
              style={{ overflowX: "none" }}
            >
              <div className="flex items-center justify-between text-[#131316]">
                <h1 className="text-[24px] font-[700] ">Filter</h1>
                <img
                  src={Close}
                  alt="close"
                  className="cursor-pointer"
                  onClick={closeModal}
                />
              </div>

              <div className="flex items-center justify-evenly mt-4">
                {["Today", "Last 7 days", "This month", "Last 3 months"].map(
                  (date, index) => (
                    <p
                      className={
                        activeTab == index
                          ? "rounded-[100px] border-[#EFF1F6] bg-[#131316] text-[#fff] cursor-pointer border-[1px] text-[12px] font-[600] p-2 px-3"
                          : "rounded-[100px] border-[#EFF1F6] border-[1px] text-[12px] font-[600] p-2 px-3 cursor-pointer"
                      }
                      onClick={() => setActiveTab(index)}
                    >
                      {date}
                    </p>
                  )
                )}
              </div>

              <div>
                <div className="my-5">
                  <h1 className="text-[16px] font-[600] my-3">Date Range</h1>
                  <div className="w-full flex items-center relative cursor-pointer">
                    <div
                      className={
                        isCalenderOpen ? Styles.active : Styles.inactive
                      }
                      onClick={handleCalenderButtonClick}
                    >
                      <p className="text-[#131316] font-[400] text-[14px]">
                        17 Jul 2023
                      </p>
                      {isCalenderOpen ? (
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16671 5.24999L0.583374 4.66666L5.00004 0.229156L9.41671 4.66666L8.83337 5.24999L5.00004 1.41666L1.16671 5.24999Z"
                            fill="#000004"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.99992 5.24999L0.583252 0.833323L1.16659 0.229156L4.99992 4.06249L8.83325 0.229156L9.41658 0.833323L4.99992 5.24999Z"
                            fill="#31373D"
                          />
                        </svg>
                      )}
                    </div>
                    <div
                      className={
                        isCalenderOpen ? Styles.active : Styles.inactive
                      }
                      onClick={handleCalenderButtonClick}
                    >
                      <p className="text-[#131316] font-[400] text-[14px]">
                        17 Jul 2023
                      </p>
                      {isCalenderOpen ? (
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16671 5.24999L0.583374 4.66666L5.00004 0.229156L9.41671 4.66666L8.83337 5.24999L5.00004 1.41666L1.16671 5.24999Z"
                            fill="#000004"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.99992 5.24999L0.583252 0.833323L1.16659 0.229156L4.99992 4.06249L8.83325 0.229156L9.41658 0.833323L4.99992 5.24999Z"
                            fill="#31373D"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {isCalenderOpen && (
                    <div className="absolute top-22 z-40  mt-2 bg-white w-11/12 mx-auto ">
                      <Dropdown
                        options={["Option 1", "Option 2", "Option 3"]}
                        onSelect={handleSelectOption}
                        App={<Calender />}
                      />
                    </div>
                  )}
                </div>

                <div className="my-5">
                  <h1 className="text-[16px] font-[600] my-3">
                    Transaction Type
                  </h1>
                  <div
                    className={isStoreOpen ? Styles.active : Styles.inactive}
                    onClick={handleStoreButtonClick}
                  >
                    <div className="text-[#131316] font-[400] text-[14px] flex flex-nowrap ">
                      {storeItems
                        .slice(0, 3)
                        .map((check, index) =>
                          storeItems.length == 1 || index == 4
                            ? check
                            : `${check},`
                        )}

                      {storeItems.join(",").length >= 40 ? "..." : ""}
                    </div>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99992 5.24999L0.583252 0.833323L1.16659 0.229156L4.99992 4.06249L8.83325 0.229156L9.41658 0.833323L4.99992 5.24999Z"
                        fill="#31373D"
                      />
                    </svg>
                  </div>
                  {isStoreOpen && <div className=" mt-2  ">{Store}</div>}
                </div>

                <div className="my-5 relative">
                  <h1 className="text-[16px] font-[600] my-3">
                    Transaction Status
                  </h1>
                  <div
                    className={isOpen ? Styles.active : Styles.inactive}
                    onClick={handleButtonClick}
                  >
                    <p className="text-[#131316] font-[400] text-[14px]">
                      {selectedItems.map((check, index) =>
                        index == 2 || selectedItems.length == 1
                          ? check
                          : `${check},`
                      )}
                    </p>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99992 5.24999L0.583252 0.833323L1.16659 0.229156L4.99992 4.06249L8.83325 0.229156L9.41658 0.833323L4.99992 5.24999Z"
                        fill="#31373D"
                      />
                    </svg>
                  </div>

                  {isOpen && Status}
                </div>
              </div>

              <div className="flex items-center w-full  items-bottom absolute right-0 left-0 bottom-4 ">
                <p className="w-1/2 rounded-[100px] border-[#EFF1F6] border-[1px] text-center text-[16px] font-[600] p-3  ml-3 mr-2">
                  Clear{" "}
                </p>
                <p
                  onClick={() =>
                    storeItems.length <= 1
                      ? GetTotalFilters()
                      : console.log("none")
                  }
                  className={
                    storeItems.length <= 1
                      ? "w-1/2 rounded-[100px] bg-[#131316] border-[1px] text-center text-[#fff] text-[16px] font-[600] p-3 ml-2 mr-3"
                      : "w-1/2 rounded-[100px] bg-[#DBDEE5] border-[1px] text-center text-[#fff] text-[16px] font-[600] p-3 ml-2 mr-3"
                  }
                >
                  Apply{" "}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Transactions;
