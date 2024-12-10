export const ContactForm = () => {
  const handleChange = () => {
    console.log("hello");
  };

  const handleSubmit = () => {
    console.log("world");
  };

  return (
    <div className=" flex justify-center items-center h-screen w-full">
      <form
        className="border w-96 h-auto flex justify-center p-3 shadow-lg flex-col shadow-cyan-700"
        onSubmit={handleSubmit}
      >
        <h1 className="text-blue-700 text-5xl font-bold my-1 mb-2">
          Contact Form
        </h1>

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

        <label htmlFor="feedback"> FeedBack:</label>
        <textarea
          type="password"
          name="pass"
          id="pass"
          onChange={handleChange}
          placeholder="provide your feedback"
          rows="4"
          cols="1"
          className="p-1 rounded-md bg-slate-200 "
        />

        <button
          type="submit"
          class="btn btn-outline-primary m-0 my-3 text-slate-900  text-2xl font-medium w-full"
        >
          Contact us
        </button>
      </form>
    </div>
  );
};
