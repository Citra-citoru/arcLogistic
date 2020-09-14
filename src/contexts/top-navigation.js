import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

// This context provider is passed to any component requiring the context
export function TopNavigationProvider({ children }) {
  const [menuID, setMenuID] = useState("Orders");

  return (
    <NavbarContext.Provider value={{menuID,setMenuID}}>
      {children}
    </NavbarContext.Provider>
  );
};
