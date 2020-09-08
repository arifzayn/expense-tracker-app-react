import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

//initial State
const initialState = {
  transactions: [
    { id: 1, description: "Income 1", transactionAmount: 1000 },
    { id: 1, description: "Expense 1", transactionAmount: -100 },
    { id: 1, description: "Income 2", transactionAmount: 2000 },
    { id: 1, description: "Expense 1", transactionAmount: -500 },
  ],
};

//Global Context
export const GlobalContext = createContext(initialState);

//Provider for the Global Context
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
