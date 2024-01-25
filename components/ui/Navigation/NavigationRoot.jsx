"use client"

import React, { useState, createContext } from 'react';

const NavigationContext = createContext();

const DropdownMenuRoot = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = { isOpen, setIsOpen };

  return (
    <DropdownMenuContext.Provider value={value}>
      <div>{children}</div>
    </DropdownMenuContext.Provider>
  );
};
