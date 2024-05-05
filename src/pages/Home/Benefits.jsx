import { Cards } from "./Cards";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
export const Benefits = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="mx-auto max-w-[90%] mt-36"
      id="benefits"
      data-aos="flip-left"
    >
      <div className="sm:flex justify-between items-center">
        <div>
          <h1 className="text-6xl font-semibold">Benefits</h1>
          <p className="text-2xl font-normal text-[#59595A] mt-5">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            <br /> eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        {/* <button className="sm:-mt-5 mt-5 border font-normal text-2xl p-3 rounded-xl transition ease-in-out bg-white active:scale-90">
          View All
        </button> */}
        <NavLink to="/courses">
          <button className=" sm:-mt-5 mt-5border rounded-lg bg-white px-5 py-3 active:scale-75 active:bg-[#e4e4e4] active:border-[#676767]">
            View Course
          </button>
        </NavLink>
      </div>
      <Cards />
    </div>
  );
};
