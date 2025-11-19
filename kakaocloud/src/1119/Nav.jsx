import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div>
        <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
          <li>
            <Link to="/">첫페이지</Link>
          </li>
          <li>
            <Link to="/layout">레이아웃</Link>
          </li>
          <li>
            <Link to="/home">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/person">사용자정보</Link>
          </li>
          <li>
            <Link to="/profiles/:username">프로필</Link>
          </li>
          <Outlet />
        </ul>
      </div>
    </>
  );
}
