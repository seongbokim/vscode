import { useState } from "react";

function User() {
  const userdata = {
    id: "",
    pw: "",
    pc: "",
    gender: "",
    mobile: "",
    local: "",
    favorite: {
      game: false,
      movie: false,
      travel: false,
      camping: false,
      food: false,
      work: false,
    },
  };

  const [user, setUser] = useState(userdata);

  const doChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type == "checkbox") {
      setUser((prev) => ({
        ...prev,
        favorite: {
          ...prev.favorite,
          [name]: checked,
        },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <div>
        <h1>회원가입</h1>
        아이디 :
        <input type="text" name="id" value={user.id} onChange={doChange} />
        <br />
        비밀번호 :
        <input type="password" name="pw" value={user.pw} onChange={doChange} />
        <br />
        비밀번호확인 :
        <input type="password" name="pc" value={user.pc} onChange={doChange} />
        <br />
        <br />
        성별
        <input
          type="radio"
          name="gender"
          value="male"
          checked={user.gender === "male"}
          onChange={doChange}
        />
        <input
          type="radio"
          name="gender"
          value="female"
          checked={user.gender === "female"}
          onChange={doChange}
        />
        <br />
        <br />
        모바일 :
        <input
          type="text"
          name="mobile"
          value={user.mobile}
          onChange={doChange}
        />
        <br />
        <br />
        지역
        <select name="local" size={5} value={user.local} onChange={doChange}>
          <option value="강원">강원</option>
          <option value="경기">경기</option>
          <option value="경남">경남</option>
          <option value="경북">경북</option>
          <option value="서울">서울</option>
          <option value="전남">전남</option>
          <option value="전북">전북</option>
          <option value="충남">충남</option>
          <option value="충북">충북</option>
          <option value="제주">제주</option>
        </select>
        <br />
        <br />
        관심분야 <br />
        게임
        <input
          type="checkbox"
          name="game"
          checked={user.favorite.game}
          onChange={doChange}
        />
        영화
        <input
          type="checkbox"
          name="movie"
          checked={user.favorite.movie}
          onChange={doChange}
        />
        여행
        <input
          type="checkbox"
          name="travel"
          checked={user.favorite.travel}
          onChange={doChange}
        />
        <br />
        캠핑
        <input
          type="checkbox"
          name="camping"
          checked={user.favorite.camping}
          onChange={doChange}
        />
        맛집
        <input
          type="checkbox"
          name="food"
          checked={user.favorite.food}
          onChange={doChange}
        />
        운동
        <input
          type="checkbox"
          name="work"
          checked={user.favorite.work}
          onChange={doChange}
        />
        <br />
        <br />
        <button onClick={() => setUser(userdata)}>초기화</button>
      </div>

      <div>
        <h2>사용자정보</h2>
        <pre>
          {`
아이디 : ${user.id}
비밀번호 : ${user.pw}
비밀번호확인 : ${user.pc}
성별 : ${user.gender}
모바일 : ${user.mobile}
지역 : ${user.local}
관심분야 :
${Object.entries(user.favorite)
  .filter(([, val]) => val)
  .map(([key]) => `- ${key}`)
  .join("\n")}
`}
        </pre>
      </div>
    </>
  );
}

export default User;
