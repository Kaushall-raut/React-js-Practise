import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const handleIncrement = () => {
    setCount(count + parseInt(value));
  };
  const handleDecrement = () => {
    setCount(count - parseInt(value));
  };
  const handleReset = () => {
    setCount(0);
  };
  console.log(typeof value);

  return (
    <div className="flex justify-center items-center w-100% h-screen   ">
      <div className=" shadow-2xl shadow-blue-500 border p-3">
        <h2 className="text-center text-blue-500  text-6xl p-4">
          Use state hook
        </h2>
        <span className="flex justify-start text-7xl p-3">{count}</span>
        <input
          type="number"
          className="border flex justify-start"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex justify-around p-6">
          <button onClick={() => handleIncrement()} disabled={count >= 100}>
            increment
          </button>
          <button onClick={() => handleDecrement()} disabled={count <= 0}>
            decrement
          </button>
          <button onClick={() => handleReset()}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
