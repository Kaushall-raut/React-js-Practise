import { useState } from "react";

export const SignUpForm = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  // switch ( ) {
  //   case value:

  //     break;

  //   default:
  //     break;
  // }
  return (
    <div className="border flex justify-center items-center h-screen w-full">
      <div className="border w-96 h-auto flex justify-center p-3 shadow-lg flex-col shadow-cyan-700">
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
          value={fName}
          placeholder="Enter First Name"
          className="p-1 rounded-md bg-slate-200 "
        />

        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          name="lname"
          id="lname"
          value={lName}
          placeholder="Enter Last Name"
          className="p-1 rounded-md bg-slate-200 "
        />

        <label htmlFor="contact">Phone No:</label>
        <input
          type="number"
          name="contact"
          id="phone"
          value={phone}
          placeholder="Enter your contact number"
          className="p-1 rounded-md bg-slate-200 "
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          className="p-1 rounded-md bg-slate-200 "
        />

        <label htmlFor="city">City Name:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          placeholder="Enter your  city"
          className="p-1 rounded-md bg-slate-200 "
        />
        <span>
          <p>By creating an account you agree to our </p>
          <a href="#" className="text-blue-800">
            Terms & Services{" "}
          </a>
        </span>
        <button
          type="button"
          class="btn btn-outline-primary m-0 my-3 text-slate-900  text-2xl font-medium w-full"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
