import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function View({ data }) {
  const { id } = useParams();
  const views = data.find((x) => x.id === parseInt(id));

  return (
    <div>
      <div>
        <Link to="/home">홈으로</Link>
      </div>
      <hr />
      <h2>게시글 내용</h2>
      <p>번호 : {views.id} </p>
      <p>제목 : {views.title} </p>
      <p>작성자 : {views.user} </p>
      <p>조회수 : {views.view} </p>
      <p>좋아요(추천) : {views.like} </p>
    </div>
  );
}
