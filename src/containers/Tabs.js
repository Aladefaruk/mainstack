/** @format */

import React, { useState } from "react";
import Tab from "../components/Tab";
import { TabsData } from "../Data";

const Tabs = () => {
  const [active, setActive] = useState(2);
  return (
    <div className="hidden lg:flex items-center">
      {TabsData.map((tab, index) => (
        <div onClick={() => setActive(index)}>
          <Tab tab={tab} index={index} active={active} />
        </div>
      ))}
    </div>
  );
};
export default Tabs;
