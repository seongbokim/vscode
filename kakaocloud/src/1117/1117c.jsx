import { useState } from "react";

function Check() {
  const [favorite, setFavorite] = useState({
    society: true,
    economy: false,
    culture: false,
  });
  const doChange = (e) => {
    setFavorite((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  return (
    <>
      <input
        type="checkbox"
        name="society"
        checked={favorite.society}
        onChange={doChange}
      />
      사회
      <br />
      <input
        type="checkbox"
        name="economy"
        checked={favorite.economy}
        onChange={doChange}
      />
      경제
      <br />
      <input
        type="checkbox"
        name="culture"
        checked={favorite.culture}
        onChange={doChange}
      />
      문화
      <br />
      <div>Society: {favorite.society.toString()}</div>
      <div>Economy: {favorite.economy.toString()}</div>
      <div>Culture: {favorite.culture.toString()}</div>
    </>
  );
}
export default Check;
