import { useState } from "react";
import "../index.css";
export const LogInForm = () => {
  const [user, setUser] = useState({
    userName: "",
    pass: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className=" flex justify-center items-center h-screen w-full">
      <form
        className="border w-96 h-auto flex justify-center p-3 shadow-lg flex-col shadow-cyan-700"
        onSubmit={handleSubmit}
      >
        <h1 className="text-blue-700 text-5xl font-bold my-1 mb-2">Log In </h1>

        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          name="userName"
          id="UserName"
          onChange={handleChange}
          placeholder="Enter Your userName"
          className="p-1 rounded-md bg-slate-200 "
        />

        <label htmlFor="Pass"> password:</label>
        <input
          type="password"
          name="pass"
          id="pass"
          onChange={handleChange}
          placeholder="Enter your password"
          className="p-1 rounded-md bg-slate-200 "
        />

        <button
          type="submit"
          className="btn btn-outline-primary m-0 my-3 text-slate-900  text-2xl font-medium w-full"
        >
          Log In
        </button>
      </form>
    </div>
  );
};
