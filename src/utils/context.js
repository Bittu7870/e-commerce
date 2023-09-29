import { createContext } from "react";

export const Context = createContext();

export const AppContext = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};
