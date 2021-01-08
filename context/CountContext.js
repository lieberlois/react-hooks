import React, { useContext, useState } from "react";

const CountContext = React.createContext();
const CountIncrementContext = React.createContext();

export const useCount = () => useContext(CountContext);
export const useCountIncrement = () => useContext(CountIncrementContext);

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <CountContext.Provider value={count}>
      <CountIncrementContext.Provider value={incrementCount}>
        {children}
      </CountIncrementContext.Provider>
    </CountContext.Provider>
  );
}
