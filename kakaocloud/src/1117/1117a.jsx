import { useState } from "react";

function Plus() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(0);
  const onClickEnter = () => {
    setResult(parseInt(a) + parseInt(b));
  };

  return (
    <div>
      A : <input type="text" value={a} onChange={(e) => setA(e.target.value)} />
      B : <input type="text" value={b} onChange={(e) => setB(e.target.value)} />
      <button onClick={onClickEnter}>더하기</button>
      a + b = <input value={result} />
    </div>
  );
}
export default Plus;
