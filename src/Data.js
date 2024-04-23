/** @format */

import {
  chat,
  group,
  payments,
  home,
  insert_chart,
  widgets,
} from "./assets/icons/index";

export const TabsData = [
  {
    tab_name: "Home",
    icon: home,
  },
  {
    tab_name: "Analytics",
    icon: insert_chart,
  },
  {
    tab_name: "Revenue",
    icon: payments,
  },
  {
    tab_name: "CRM",
    icon: group,
  },
  {
    tab_name: "Apps",
    icon: widgets,
  },
];

export const TransactionData = [
  {
    trans: "in",
    title: "Psychology of Money ",
    desc: "Roy Cash",
  },
  {
    trans: "in",
    title: "Buy me a coffee",
    desc: "Jonathan Smart",
  },
  {
    trans: "out",
    title: "Cash withdrawal ",
    desc: "successful",
  },
  {
    trans: "in",
    title: "Psychology of Money ",
    desc: "Roy Cash",
  },
  {
    trans: "out",
    title: "Cash withdrawal",
    desc: "pending",
  },
];
