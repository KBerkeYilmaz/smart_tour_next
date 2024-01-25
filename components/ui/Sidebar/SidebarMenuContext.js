import React, { createContext } from "react";

export const SidebarMenuContext = createContext({
  roomData: {
    singleRoom: 0,
    doubleRoom: 0,
    tripleRoom: 0,
    hotelRating: 0,
    singleAdult: 0,
    doubleAdult: 0,
    tripleAdult: 0,
  },
  handleRoomData: () => {},
  testValue: "",
});

export default SidebarMenuContext;
