import { useSearchParams } from "react-router-dom";

function Person() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const job = searchParams.get("job");
  const city = searchParams.get("city");
  const age = searchParams.get("age");

  return (
    <div>
      <h1>Person</h1>
      <p>Name : {name}</p>
      <p>Job : {job}</p>
      <p>City : {city}</p>
      <p>Age : {age}</p>
    </div>
  );
}

export default Person;
