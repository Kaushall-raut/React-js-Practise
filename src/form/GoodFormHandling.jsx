import { useState } from "react";
// !This is the perfect way to handle form data
const HandleFormData = () => {
  const [userData, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleFormData = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className=" flex justify-center items-center h-screen w-full">
      <form
        className="border w-96 h-auto flex justify-center p-3 shadow-lg flex-col shadow-cyan-700"
        onSubmit={handleSubmit}
      >
        <h1 className="text-blue-700 text-5xl font-bold my-1 ">Sign UP </h1>
        <span>
          <p className="font-extralight font-thin text-neutral-400">
            Please Fill in this form to create an account
          </p>
        </span>

        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          name="fname"
          id="fname"
          value={userData.fName}
          placeholder="Enter First Name"
          className="p-1 rounded-md bg-slate-200 "
          onChange={handleFormData}
        />

        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          name="lname"
          id="lname"
          value={userData.lName}
          placeholder="Enter Last Name"
          className="p-1 rounded-md bg-slate-200 "
          onChange={handleFormData}
        />

        <label htmlFor="contact">Phone No:</label>
        <input
          type="number"
          name="phone"
          id="phone"
          value={userData.phone}
          placeholder="Enter your contact number"
          className="p-1 rounded-md bg-slate-200 "
          onChange={handleFormData}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          placeholder="Enter your email"
          className="p-1 rounded-md bg-slate-200 "
          onChange={handleFormData}
        />

        <label htmlFor="city">City Name:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={userData.city}
          placeholder="Enter your  city"
          className="p-1 rounded-md bg-slate-200 "
          onChange={handleFormData}
        />
        <span>
          <p>By creating an account you agree to our </p>
          <a href="#" className="text-blue-800">
            Terms & Services{" "}
          </a>
        </span>
        <button
          type="submit"
          class="btn btn-outline-primary m-0 my-3 text-slate-900  text-2xl font-medium w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default HandleFormData;
