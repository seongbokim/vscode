import { useContext, useState } from "react";
import ColorContext from "./color";
import { Link } from "react-router-dom";
import SelectColors from "../components/SelectColors";

export default function Home() {
  const { actions } = useContext(ColorContext);

  const [selected, setSelected] = useState("red");

  function colorchange(e) {
    setSelected(e.target.value);
    actions.setColor(e.target.value);
  }

  return (
    <div>
      <label>
        <h2>색상 예시</h2>
        <SelectColors />
        색상을 선택하시오 :
        <select value={selected} onChange={colorchange}>
          <option value="red">red</option>
          <option value="orange">orange</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="indigo">indigo</option>
          <option value="violet">violet</option>
          <option value="black">black</option>
        </select>
      </label>
      <hr />

      <Link to="/profile">선택한 색상 페이지 이동</Link>
    </div>
  );
}
