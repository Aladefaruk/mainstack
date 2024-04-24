/** @format */


import * as React from "react";
import { useState } from "react";
import { Calendar } from "./ui/calendar";

const Calender = ({}) => {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border w-full mx-auto"
    />
  );
};
export default Calender;
