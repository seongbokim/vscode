import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onReset = () => {
    setId("");
    setPw("");
  };

  const onLogin = (e) => {
    e.preventDefault();

    if (id == "" || pw == "") {
      alert("아이디와 비밀번호를 정확히 입력해주세요");
      return;
    }

    navigate("/home");
  };

  return (
    <div>
      <h2>로그인 페이지</h2>
      아이디 :
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <br />
      비밀번호 :
      <input type="text" value={pw} onChange={(e) => setPw(e.target.value)} />
      <br />
      <button onClick={onLogin}>로그인</button>
      <button onClick={onReset}>취소</button>
      <hr />
      <div style={{ display: "flex", gap: "50px", marginTop: "20px" }}>
        <Link to="/home">홈으로</Link>
        <br />
        <Link to="">회원가입</Link>
      </div>
    </div>
  );
}
