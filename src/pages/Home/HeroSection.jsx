import { NavLink } from "react-router-dom";
import { Elector } from "../../assets/img";

export const HeroSection = () => {
  return (
    <>
      <div className="mt-10 sm:mt-60 border-red-900" >
        <div className="flex items-center mx-auto w-[90%] sm:justify-center justify-between">
          <h1 className="text-xl sm:text-6xl font-bold bg-white rounded-lg p-5 flex items-center">
            <span>
              <Elector />
            </span>
            <span className="text-[#FF9500] ml-5">Unlock </span> Your Creative
            Potential
          </h1>
        </div>
        {/* 2 */}
        <div className="flex items-center mx-auto w-[90%] justify-evenly mt-10">
          <h1 className="sm:text-5xl font-[600] text-4xl text-center">
            with Online Design and Development Courses.
          </h1>
        </div>
        <div className="flex items-center mx-auto w-[90%] justify-evenly sm:mt-10 mt-5">
          <p className="sm:text-3xl font-[400] text-center text-2xl">
            Learn from Industry Experts and Enhance Your Skills.
          </p>
        </div>
        {/* buttons */}
        <div className="flex items-center mx-auto w-[90%] justify-center mt-10">
          <NavLink to="/courses" className="active:scale-90">
            <button className="text-white bg-[#FF9500] rounded-lg p-4 text-2xl">
              Explore Courses
            </button>
          </NavLink>
          <a href="#pricing" className="active:scale-90">
            <button className="border  p-4 text-2xl rounded-lg bg-white ml-5">
              View Pricing
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
