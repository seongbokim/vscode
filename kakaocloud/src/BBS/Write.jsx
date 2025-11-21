import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Write({ data, setData }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const [view, setView] = useState(0);
  const [like, setLike] = useState(0);

  const onGo = () => {
    const newData = {
      id: data.length + 1,
      title,
      user,
      view: parseInt(view),
      like: parseInt(like),
    };
    console.log(newData);

    setData([...data, newData]);
    navigate("/home");
  };
  const onGoreset = () => {
    setTitle("");
    setUser("");
    setView(0);
    setLike(0);
  };

  return (
    <div>
        <div style={{ display: "flex", gap: "50px", marginTop: "20px" }}>
        <Link to="/home">홈으로</Link>
        </div>
      <h2>게시글 작성</h2>
      <div>
        제목 :
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <br />
        <br />
        작성자 :
        <input value={user} onChange={(e) => setUser(e.target.value)}></input>
        <br />
        <br />
        조회수 :
        <input value={view} onChange={(e) => setView(e.target.value)}></input>
        <br />
        <br />
        좋아요 :
        <input value={like} onChange={(e) => setLike(e.target.value)}></input>
        <br />
        <br />
      </div>
      <hr />
      <div style={{ display: "flex", gap: "24px", marginTop: "20px" }}>
        <button onClick={onGo}>등록</button>
        <br />
        <button onClick={onGoreset}>취소</button>
      </div>
    </div>
  );
}
