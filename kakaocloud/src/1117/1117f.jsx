import { useState } from "react";

function Select() {
  const [favorite, setFavorite] = useState("");
  const doChange = (e) => {
    setFavorite(e.target.value);
  };
  return (
    <>
      <select value={favorite} onChange={doChange}>
        <option value="apple">Apple</option>
        <option value="grape">Grape</option>
        <option value="strawberry">Strawberry</option>
        <option value="watermelon">Watermelon</option>
      </select>
      <div>선택한 과일 : {favorite}</div>
    </>
  );
}

export default Select;
