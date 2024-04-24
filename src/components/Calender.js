/** @format */

// /** @format */

// import { useState } from "react";
// import { format } from "date-fns";

// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

// const Calender = () => {
//   const [selected, setSelected] = useState(new Date());

//   let footer = <p>Please pick a day.</p>;
//   if (selected) {
//     footer = <p>You picked {format(selected, "PP")}.</p>;
//   }
//   return (
//     <DayPicker
//       mode="single"
//       selected={selected}
//       onSelect={setSelected}
//       footer={footer}
//     />
//   );
// };

// export default Calender;

import * as React from "react";
import { useState } from "react";

import { Calendar } from "./ui/calendar";

const Calender = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};
export default Calender;
