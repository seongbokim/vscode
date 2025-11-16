//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  let go = "";
  let a = 0;
  for (a = 1; a < 10; a++) {
    go += `7 * ${a} = ${7 * a}\n`;
  }
  return (
    <>
      <h1 style={{ backgroundColor: "Yellow", color: "red" }}> 리액트 안녕 </h1>
      <h2> 구구단 </h2>
      <pre> {go} </pre>
    </>
  );
}

export default App;
