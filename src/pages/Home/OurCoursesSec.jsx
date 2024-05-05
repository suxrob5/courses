import { NavLink } from "react-router-dom";

export const OurCoursesSec = () => {
  return (
    <div
      className="w-[90%] mx-auto mt-[100px]"
      id="ourcourses"
      data-aos="zoom-in-up"
    >
      <div className="sm:flex justify-between items-center">
        <div>
          <h1 className="text-6xl font-semibold">Our Courses</h1>
          <p className="text-2xl font-normal text-[#59595A] mt-5">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            <br /> eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="mt-5 sm:-mt-5">
          <NavLink to="/courses">
            <button className="px-6 p-4 font-normal hover:text-white hover:bg-black hover:rounded-lg text-2xl border rounded-lg active:scale-75">
              View All
            </button>
          </NavLink>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 mt-[60px] gap-10">
        {/*  */}
        <div className="bg-white border rounded-md" data-aos="zoom-in-up">
          <div className="p-7">
            <div>
              <img src="./src/assets/images/HomeImages/img1.png" alt="imf" />
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="flex">
                <p className="text-[#4C4C4D] border rounded-lg p-3">4 Weeks</p>
                <p className="text-[#4C4C4D] border rounded-lg p-3 ml-5">
                  Beginner
                </p>
              </div>
              <h1 className="font-bold text-2xl">By John Smith</h1>
            </div>
            <div className="title mt-10">
              <h1 className="text-3xl font-bold">Web Design Fundamentals</h1>
              <p className="text-[#4C4C4D] mt-10">
                Learn the fundamentals of web design, including HTML, CSS, and
                responsive <br /> design principles. Develop the skills to
                create visually appealing and user- <br />
                friendly websites.
              </p>
            </div>
            <div className="mt-10">
              <NavLink to="/courses">
                <button className="hover:text-[#ffffff] hover:bg-[#454444] border rounded-lg w-[100%] py-3 text-2xl font-[500] bg-[#F7F7F8] active:scale-95">
                  Get it Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-white border rounded-md" data-aos="zoom-in-up">
          <div className="p-7">
            <div>
              <img src="./src/assets/images/HomeImages/img2.png" alt="imf" />
            </div>
            <div className="sm:flex items-center justify-between mt-10">
              <div className="flex">
                <p className="text-[#4C4C4D] border rounded-lg p-3">6 Weeks</p>
                <p className="text-[#4C4C4D] border rounded-lg p-3 ml-5 text-[10px] sm:text-xl">
                  Intermediate
                </p>
              </div>
              <h1 className="font-bold text-2xl">By John Smith</h1>
            </div>
            <div className="title mt-10">
              <h1 className="text-3xl font-bold">UI/UX Design</h1>
              <p className="text-[#4C4C4D] mt-10">
                Master the art of creating intuitive user interfaces (UI) and
                enhancing user <br /> experiences (UX). Learn design principles,
                wireframing, prototyping, and <br /> usability testing
                techniques.
              </p>
            </div>
            <div className="mt-10">
              <NavLink to="/courses">
                <button className="hover:text-[#ffffff] hover:bg-[#454444] border rounded-lg w-[100%] py-3 text-2xl font-[500] bg-[#F7F7F8] active:scale-95">
                  Get it Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-white border rounded-md" data-aos="zoom-in-up">
          <div className="p-7">
            <div>
              <img src="./src/assets/images/HomeImages/img3.png" alt="imf" />
            </div>
            <div className="sm:flex items-center justify-between mt-10">
              <div className="flex">
                <p className="text-[#4C4C4D] border rounded-lg p-3">8 Weeks</p>
                <p className="text-[#4C4C4D] border rounded-lg p-3 ml-5">
                  Intermediate
                </p>
              </div>
              <h1 className="font-bold text-2xl">By David Brown</h1>
            </div>
            <div className="title mt-10">
              <h1 className="text-3xl font-bold">Mobile App Development</h1>
              <p className="text-[#4C4C4D] mt-10">
                Dive into the world of mobile app development. Learn to build
                native iOS <br /> and Android applications using
                industry-leading frameworks like Swift and Kotlin. <br />
                <span className="text-white">.</span>
              </p>
            </div>
            <div className="mt-10">
              <NavLink to="/courses">
                <button className="hover:text-[#ffffff] hover:bg-[#454444] border rounded-lg w-[100%] py-3 text-2xl font-[500] bg-[#F7F7F8] active:scale-95">
                  Get it Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-white border rounded-md" data-aos="zoom-in-up">
          <div className="p-7">
            <div>
              <img src="./src/assets/images/HomeImages/img4.png" alt="imf" />
            </div>
            <div className="sm:flex items-center justify-between mt-10">
              <div className="flex">
                <p className="text-[#4C4C4D] border rounded-lg p-3">10 Weeks</p>
                <p className="text-[#4C4C4D] border rounded-lg p-3 ml-5">
                  Beginner
                </p>
              </div>
              <h1 className="font-bold text-2xl">By Sarah Thompson</h1>
            </div>
            <div className="title mt-10">
              <h1 className="text-3xl font-bold">
                Graphic Design for Beginners
              </h1>
              <p className="text-[#4C4C4D] mt-10">
                Discover the fundamentals of graphic design, including
                typography, color <br /> theory, layout design, and image
                manipulation techniques. Create visually <br /> stunning designs
                for print and digital media.
              </p>
            </div>
            <div className="mt-10">
              <NavLink to="/courses">
                <button className="hover:text-[#ffffff] hover:bg-[#454444] border rounded-lg w-[100%] py-3 text-2xl font-[500] bg-[#F7F7F8] active:scale-95">
                  Get it Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-white border rounded-md" data-aos="zoom-in-up">
          <div className="p-7">
            <div>
              <img src="./src/assets/images/HomeImages/img5.png" alt="imf" />
            </div>
            <div className="sm:flex items-center justify-between mt-10">
              <div className="flex">
                <p className="text-[#4C4C4D] border rounded-lg p-3">10 Weeks</p>
                <p className="text-[#4C4C4D] border rounded-lg p-3 ml-5">
                  Beginner
                </p>
              </div>
              <h1 className="font-bold text-2xl">By Michael Adams</h1>
            </div>
            <div className="title mt-10">
              <h1 className="text-3xl font-bold">Front-End Web Development </h1>
              <p className="text-[#4C4C4D] mt-10">
                Become proficient in front-end web development. Learn HTML, CSS,
                <br />
                JavaScript, and popular frameworks like Bootstrap and React.
                Build <br /> interactive and responsive websites.
              </p>
            </div>
            <div className="mt-10">
              <NavLink to="/courses">
                <button className="hover:text-[#ffffff] hover:bg-[#454444] border rounded-lg w-[100%] py-3 text-2xl font-[500] bg-[#F7F7F8] active:scale-95">
                  Get it Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-white border rounded-md" data-aos="zoom-in-up">
          <div className="p-7">
            <div>
              <img src="./src/assets/images/HomeImages/img6.png" alt="imf" />
            </div>
            <div className="sm:flex items-center justify-between mt-10">
              <div className="flex">
                <p className="text-[#4C4C4D] border rounded-lg p-3">6 Weeks</p>
                <p className="text-[#4C4C4D] border rounded-lg p-3 ml-5">
                  Advance
                </p>
              </div>
              <h1 className="font-bold text-2xl">By Michael Adams</h1>
            </div>
            <div className="title mt-10">
              <h1 className="text-3xl font-bold">Advanced JavaScript</h1>
              <p className="text-[#4C4C4D] mt-10">
                Take your JavaScript skills to the next level. Explore advanced
                concepts like <br /> closures, prototypes, asynchronous
                programming, and ES6 features. Build <br /> complex applications
                with confidence.
              </p>
            </div>
            <div className="mt-10">
              <NavLink to="/courses">
                <button className="hover:text-[#ffffff] hover:bg-[#454444] border rounded-lg w-[100%] py-3 text-2xl font-[500] bg-[#F7F7F8] active:scale-95">
                  Get it Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
