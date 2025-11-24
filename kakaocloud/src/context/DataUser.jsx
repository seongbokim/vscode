import { useState } from "react";
import { DataContext } from "../context/DataContext.jsx";

export default function DataUser({ children }) {
  const [data, setData] = useState([
    { id: 1, title: "가", user: "홍길동", view: 20, like: 1 },
    { id: 2, title: "나", user: "이순신", view: 30, like: 5 },
    { id: 3, title: "다", user: "유관순", view: 15, like: 7 },
  ]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
