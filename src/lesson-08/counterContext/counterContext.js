import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const incrementByAmount = (amount) => {
    setCount((prev) => prev + amount);
  };

  return (
    <CounterContext.Provider
      value={{ count, increment, decrement, incrementByAmount }}
    >
      {children}
    </CounterContext.Provider>
  );
};
