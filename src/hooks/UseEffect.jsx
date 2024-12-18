import { useEffect, useState } from "react";

export const Effect = () => {
  const date = new Date();

  const [count, setCount] = useState(0);

  const [dat, setDate] = useState("");

  useEffect(() => {
    console.log("hello world");
    setInterval(() => {
      setDate(date.toLocaleTimeString());
    }, 1000);
    console.log(date.toLocaleTimeString());
  }, [count, dat]);

  console.log();
  return (
    <div>
      <h1>
        Count: <span>{count}</span>{" "}
      </h1>
      <h2>{dat}</h2>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
};
