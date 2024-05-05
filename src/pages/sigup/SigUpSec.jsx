import { useState } from "react";
import { NavLink } from "react-router-dom";

const SigUpSec = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  setTimeout(() => {
    // input value
    const form = document.querySelector(".form");
    const btn = document.querySelector("#login");
    function handleSubmit(event) {
      event.preventDefault();

      const username = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      btn.addEventListener("click", () => {
        const userData = { username, password };
        if (username !== "" && password !== "") {
          localStorage.setItem("userData", JSON.stringify(userData));
          window.location.href = "/login";
          event.target.reset();
        } else {
          alert("Please enter your username and password");
        }
      });
    }
    form.addEventListener("submit", handleSubmit);
  }, 1);

  return (
    <div className="login">
      <div className="p-5">
        <div className="flex items-center justify-center">
          <h1 className="text-5xl font-[600]">Sig Up</h1>
        </div>
        <div className="flex items-center justify-center sm:mt-5 mt-10">
          <p className="text-center">
            Welcome back! Please log in to access your account.
          </p>
        </div>
        <form action="form" className="form">
          <div className="">
            {/*  */}
            <div className=" sm:w-[90%] mx-auto mt-10">
              <div className=" sm:w-[90%] mx-auto">
                <h1 className="text-2xl font-[500]">Full Name</h1>
              </div>
              <div className="sm:w-[90%] mx-auto mt-2">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="border p-5 w-[100%] outline-none border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent animate-wiggle"
                  id="fullName"
                />
              </div>
            </div>
            {/*  */}
            <div className=" sm:w-[90%] mx-auto mt-10">
              <div className=" sm:w-[90%] mx-auto">
                <h1 className="text-2xl font-[500]">Email</h1>
              </div>
              <div className="sm:w-[90%] mx-auto mt-2">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="border p-5 w-[100%] outline-none border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent animate-wiggle"
                  id="email"
                />
              </div>
            </div>
            {/*  */}
            <div className="sm:w-[90%] mx-auto mt-10">
              <div className="sm:w-[90%] mx-auto">
                <h1 className="text-2xl font-[500]">Password</h1>
              </div>
              <div className="sm:w-[90%] mx-auto mt-2 flex border bg-white rounded-lg">
                {isPlaying ? (
                  <input
                    type="text"
                    className="p-5 w-[100%] outline-none border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent animate-wiggle"
                    placeholder="Enter out Password"
                    id="password"
                  />
                ) : (
                  <input
                    type="password"
                    className="p-5 w-[100%] outline-none border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent animate-wiggle"
                    placeholder="Enter out Password"
                    id="password"
                  />
                )}
                <button
                  onClick={handlePlayPause}
                  style={{ marginLeft: "-30px" }}
                >
                  {isPlaying ? (
                    <i className="fas fa-eye active:scale-50"></i>
                  ) : (
                    <i className="fas fa-eye-slash active:scale-50"></i>
                  )}
                </button>
              </div>
              {/*  */}
              <div className="flex items-center justify-between mt-5  w-[90%] mx-auto">
                <h1 className="text-white">.</h1>
                <NavLink to="/sigup" className="active:scale-90">
                  I agree with
                  <span className="underline"> Terms of Use</span> and{" "}
                  <span className="underline">Privacy Policy</span>
                </NavLink>
              </div>

              <div className="w-[90%] mx-auto mt-5">
                <button
                  className="py-4 w-[100%] bg-[#FF9500FF] rounded-lg text-white text-2xl font-[600] active:scale-90"
                  id="login"
                >
                  Login
                </button>
              </div>
              <h1 className="font-[700] text-5xl text-center mt-10">OR</h1>
              <div className="mt-10 flex items-center justify-center mx-auto w-[90%]">
                <button className="flex items-center justify-center text-2xl bg-[#F7F7F8FF] border p-5 rounded-xl w-[100%] active:scale-90">
                  <img src="./src/assets/images/Icon.svg" alt="google" />
                  <span className="ml-5">Sign Up with Google</span>
                </button>
              </div>
              <div className="w-[90%] mx-auto mt-10 flex justify-center">
                <h1 className="text-2xl font-normal">
                  Already have an account?
                  <strong className="ml-2">
                    <NavLink
                      to="/login"
                      className="hover:text-blue-500 underline"
                    >
                      Login
                    </NavLink>
                  </strong>
                </h1>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigUpSec;
