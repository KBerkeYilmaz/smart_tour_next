"use client";

import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import SidebarMenuContext from "./SidebarMenuContext";

import "./styles.css";

const SideBarMenuRoot = () => {
  const [roomData, setRoomData] = useState({
  }); // State to hold room data

  console.log(roomData)
  
  const handleRoomData = (data) => {
    setRoomData(data);
  };

  console.log(roomData);

  return (
    <SidebarMenuContext.Provider
      value={{ roomData, handleRoomData, testValue: "Hello World" }}
    >
      <SidebarMenu />
    </SidebarMenuContext.Provider>
  );
};

export default SideBarMenuRoot;
