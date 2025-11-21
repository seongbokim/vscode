import { createContext } from "react";
import { useState } from "react";

const DataContext = createContext();

export default function Datago({ children }) {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
