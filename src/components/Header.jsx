import { NavLink } from "react-router-dom";
import "./index.css";
import Right, { MainIcon } from "../assets/img";
export const Header = () => {
  const None = () => {
    const div = document.querySelector(".my-div");
    div.style.width = "0px";
    setTimeout(() => {
      div.style.display = "none";
    }, 200);
  };
  const Click = () => {
    setTimeout(() => {
      const div = document.querySelector(".my-div");
      div.style.display = "block";
      setTimeout(() => {
        div.style.width = "300px";
      }, 10);
    }, 1);
  };
  return (
    <>
      <div className="">
        <div className="sm:w-[95%] bg-[#FF9500] flex items-center justify-center mx-auto rounded-lg w-[90%] sm:mx-auto">
          <h1 className="text-white p-4 font-[400] text-[13px] sm:text-[19px]">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </h1>
          <Right />
        </div>
      </div>
      {/* pages */}
      <div className="flex items-center justify-between mx-auto w-[95%] ">
        <nav className="font-bold space-x-10 mt-7 w-[60%] sm:w-[40%]">
          <ul className="">
            <li className="flex justify-between mx-auto container w-[90%] text-[18px] font-[400] items-center">
              <img src="./src/assets/images/Logo.svg" alt="mainIMg" />
              <div className="hidden sm:flex justify-between mx-auto container w-[90%] text-[18px] font-[400] items-center ml-5 border-red-900">
                <NavLink className="active:scale-90" to="/">
                  Home
                </NavLink>
                <NavLink className="active:scale-90" to="/courses">
                  Courses
                </NavLink>
                {/* <NavLclassName="active:scale-90" ink to="/coursesopen">CoursesOpen</NavLink> */}
                <NavLink className="active:scale-90" to="/aboutus">
                  About Us
                </NavLink>
                <NavLink className="active:scale-90" to="/pricing">
                  Pricing
                </NavLink>
                <NavLink className="active:scale-90" to="/contact">
                  Contact
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
        {/* login pages */}
        <div>
          <nav className="flex w-[170px] mt-5 sm:mt-0">
            <div className="p-4 font-[500] text-[18px] flex items-center justify-between w-screen -ml-[50px]">
              <NavLink to="/sigup" className="active:scale-50">
                SigUp
              </NavLink>
              <NavLink to="/login" className="active:scale-90">
                <button className="bg-[#FF9500] px-5 p-3 rounded-lg text-white">
                  Login
                </button>
              </NavLink>
              <div></div>
              <h1
                className="sm:hidden click active:scale-75 cursor-pointer"
                onClick={Click}
              >
                <MainIcon />
              </h1>
            </div>
          </nav>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="hidden my-div bg-white absolute w-[90%] mx-auto border">
          <div className="block">
            <button onClick={None}>
              <i className="fa-solid fa-xmark fa-fade text-3xl sm:hidden"></i>
            </button>
            <li className="grid grid-cols-1 mx-auto container w-[90%] text-[18px] font-[400] items-center ">
              <NavLink
                className="active:scale-90 active:border active:rounded-xl"
                to="/"
              >
                Home{" "}
              </NavLink>
              <NavLink
                className="active:scale-90 active:border active:rounded-xl"
                to="/courses"
              >
                Courses
              </NavLink>
              {/* <NavLclassName="active:scale-90" ink to="/coursesopen">CoursesOpen</NavLink> */}
              <NavLink
                className="active:scale-90 active:border active:rounded-xl"
                to="/aboutus"
              >
                About Us
              </NavLink>
              <NavLink
                className="active:scale-90 active:border active:rounded-xl"
                to="/pricing"
              >
                Pricing
              </NavLink>
              <NavLink
                className="active:scale-90 active:border active:rounded-xl"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};
