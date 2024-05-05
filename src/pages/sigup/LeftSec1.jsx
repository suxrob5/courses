/* eslint-disable react/no-unescaped-entities */
const LeftSec1 = () => {
  return (
    <div className=" w-[90%] mx-auto">
      <h1 className="text-6xl font-[600]">Students Testimonials</h1>
      <p className="text-xl mt-5">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras <br /> eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </p>
      {/* card */}
      <div className="card rounded-xl bg-white mt-[100px]">
        <div className="sm:p-10 p-5">
          <div>
            <p className="text-[15px] font-[500] text-[#59595AFF]">
              I enrolled in the graphic design course as a beginner, and it was
              the perfect <br /> starting point. The instructor's guidance and
              feedback improved my design <br /> abilities significantly. I'm
              grateful for this course!
            </p>
          </div>
          {/* user */}
          <div className="flex items-center justify-between mt-10 ">
            <div className="flex items-center justify-start">
              <img src="./src/assets/images/HomeImages/user4.svg" alt="user" />
              <p className="font-[700] text-2xl sm:ml-5 ml-4">Michael K</p>
            </div>
            <button className="bg-white rounded-lg px-3 sm:px-5 py-4 sm:text-2xl text-xl font-[500] active:scale-75">
              Read Full Story
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <div>.</div>
        <div className="flex items-center justify-between">
          <button className="border rounded-lg bg-white p-5 px-6 text-2xl active:scale-50">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="border rounded-lg bg-white p-5 px-6 text-2xl ml-5 active:scale-50">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSec1;
