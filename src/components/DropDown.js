/** @format */

import React, { useState } from "react";
import "../styles/index.css";
import Calender from "./Calender";
import { format } from "date-fns";

const Dropdown = ({ options, onSelect, App }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const [selected, setSelected] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  return (
    <div className="rounded-[20px] w-full rounded-tl-5xl  shadow-md">
      <div className="">{App}</div>
    </div>
  );
};

export default Dropdown;
