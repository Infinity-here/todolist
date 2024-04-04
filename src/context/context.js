import React, { createContext, useContext,  useState } from "react";

export const SharedArrayContext = createContext();

export function SharedArrayProvider({ children }) {
  const [sharedArray, setSharedArray] = useState([]);
  console.log(sharedArray, "sharde array");
  return (
    <SharedArrayContext.Provider value={{ sharedArray, setSharedArray }}>
      {children}
    </SharedArrayContext.Provider>
  );
}

export function useSharedArray() {
  return useContext(SharedArrayContext);
}
