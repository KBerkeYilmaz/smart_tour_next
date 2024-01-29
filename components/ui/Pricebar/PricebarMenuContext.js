import React, { createContext } from "react";

export const SidebarMenuContext = createContext({
  PriceData: {
    totalAmount: 0
  },
  handlePriceData: () => {},
  testValue: "",
});

export default SidebarMenuContext;
