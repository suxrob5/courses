import { NavLink } from "react-router-dom";
import { useState } from "react";

const LoginSec = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const Login = (e) => {
    const password = document.querySelector("#LoginPassword").value;
    const email = document.querySelector("#LoginEmail").value;
    //
    const getData = JSON.parse(localStorage.getItem("userData"));
    const getUsername = getData.username;
    const getPassword = getData.password;

    if (email == getUsername && password == getPassword) {
      window.location.href = "/";
      e.target.reset();
    } else if (email !== getUsername && password !== getPassword) {
      alert("Password or email error");
    } else if (getData == null) {
      alert("make one sig up");
    }

    if (email == "" && password == "") {
      alert("Please enter a valid email or password address");
    }
  };

  const Corn = () => {
    const confign = confirm("You really want to log out");
    if (confign) {
      localStorage.removeItem("userData");
      window.location.href = "/sigup";
    }
  };
  return (
    <div className="login">
      <div className="p-5">
        <div className="flex items-center justify-center">
          <h1 className="text-5xl font-[600]">Login</h1>
        </div>
        <div className="flex items-center justify-center sm:mt-5 mt-10">
          <p className="text-center">
            Welcome back! Please log in to access your account.
          </p>
        </div>
        <div className=" sm:w-[90%] mx-auto mt-10">
          <div className=" sm:w-[90%] mx-auto">
            <h1 className="text-2xl font-[500]">Email</h1>
          </div>
          <div className="sm:w-[90%] mx-auto mt-2">
            <input
              type="text"
              placeholder="Enter your Email"
              className="border p-5 w-[100%] outline-none border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent animate-wiggle"
              id="LoginEmail"
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
                id="LoginPassword"
              />
            ) : (
              <input
                type="password"
                className="p-5 w-[100%] outline-none border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent animate-wiggle"
                placeholder="Enter out Password"
                id="LoginPassword"
              />
            )}
            <button onClick={handlePlayPause} style={{ marginLeft: "-30px" }}>
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
            <NavLink className="active:scale-90" onClick={Corn}>
              Forgot Password?
            </NavLink>
          </div>
          <div className="flex items-center mx-auto sm:w-[90%]">
            <input
              type="checkbox"
              className="border w-[20px] active:scale-90"
            />
            <p className="text-xl">Remember Me</p>
          </div>
          <div className="w-[90%] mx-auto mt-5">
            <button
              className="py-4 w-[100%] bg-[#FF9500FF] rounded-lg text-white text-2xl font-[600] active:scale-90"
              onClick={Login}
            >
              Login
            </button>
          </div>
          <h1 className="font-[700] text-5xl text-center mt-10">OR</h1>
          <div className="mt-10 flex items-center justify-center mx-auto w-[90%]">
            <button className="flex items-center justify-center text-2xl bg-[#F7F7F8FF] border p-5 rounded-xl w-[100%] active:scale-90">
              <img src="./src/assets/images/Icon.svg" alt="google" />
              <span className="ml-5">Login with Google</span>
            </button>
          </div>
          <div className="w-[90%] mx-auto mt-10 flex justify-center">
            <h1 className="text-2xl font-normal">
              Don’t have an account?
              <strong className="ml-2">
                <NavLink to="/sigup" className="hover:text-blue-500">
                  Sign Up
                </NavLink>
              </strong>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSec;
