import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home({ data }) {
  const navigate = useNavigate();

  const goView = (x) => {
    navigate(`/view/${x.id}`);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <Link to="/">로그인</Link>
        <Link to="/register">회원가입</Link>
      </div>

      <h2>홈페이지</h2>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>좋아요(추천)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => (
            <tr
              key={x.id}
              onClick={() => goView(x)}
              style={{ cursor: "porinter" }}
            >
              <td>{x.id}</td>
              <td>{x.title}</td>
              <td>{x.user}</td>
              <td>{x.view}</td>
              <td>{x.like}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div>
        <Link to="/write">글쓰기</Link>
      </div>
    </div>
  );
}
