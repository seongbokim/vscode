import { useState } from "react";

function Plus() {
  const [value, setValue] = useState({ a: "", b: "", result: "" });
  const doChange = (e) => {
    const temp = {
      ...value,
      [e.target.name]: e.target.value,
    };
    setValue(temp);
  };
  const setResult = () => {
    const temp = {
      result: parseInt(value.a) + parseInt(value.b),
    };
    setValue(temp);
  };

  return (
    <div>
      A : <input type="text" name="a" value={value.a} onChange={doChange} />
      <br />
      B : <input type="text" name="b" value={value.b} onChange={doChange} />
      <br />
      <button onClick={() => setResult()}>더하기</button>
      <br />
      a + b = <input type="text" name="result" value={value.result} />
    </div>
  );
}
export default Plus;
