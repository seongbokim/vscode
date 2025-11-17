import { useState } from "react";

function Radio() {
  const [gender, setGender] = useState("");
  const doChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender == "male"}
        onChange={(e) => doChange(e)}
      />
      남자
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender == "female"}
        onChange={(e) => doChange(e)}
      />
      여자
      <br />
      <br />
      <label>{gender}</label>
    </>
  );
}
export default Radio;
