import { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";
import { useNavigate } from "react-router-dom";

export default function ColorBox() {
  const { state } = useContext(ColorContext);

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <p>선택한 색깔은 : {state.color}</p>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <button onClick={goBack}>뒤로가기</button>
    </>
  );
}
