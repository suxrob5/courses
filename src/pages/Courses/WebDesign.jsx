import { NavLink } from "react-router-dom"

export const WebDesign = () => {
  return (
    <>
      <div className="w-[90%] max-w-[1519px] mx-auto">
        <div className="bg-white mx-auto rounded-xl" id="name">
          <div className="p-10">
            <div className="sm:flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold">Web Design Fundamentals</h1>
                <p className="text-xl mt-5 font-normal">
                  Learn the fundamentals of web design, including HTML, CSS, and
                  responsive design principles. Develop the skills to create
                  visually appealing and <br /> user-friendly websites.
                </p>
              </div>
              <NavLink to="/coursesopen">
                <button className="border rounded-lg bg-white px-5 py-3 sm:mt-0 mt-10 active:scale-75 active:bg-[#e4e4e4] active:border-[#676767]">
                  View Course
                </button>
              </NavLink>
            </div>
            {/*  */}
            <div className="grid grid-cols-3 mx-auto gap-6 mt-10">
              <img
                src="./src/assets/images/CoursesImg/img1.jpeg"
                alt="images"
              />
              <img
                src="./src/assets/images/CoursesImg/img3.jpeg"
                alt="images"
              />
              <img
                src="./src/assets/images/CoursesImg/img2.jpeg"
                alt="images"
              />
            </div>
            <div className="flex items-center justify-between mt-10">
              <div>
                <button className="py-3 px-5 border text-[#59595AFF] rounded-lg">
                  4 Weeks
                </button>
                <button className="py-3 px-5 border text-[#59595AFF] rounded-lg ml-5">
                  Beginner
                </button>
              </div>
              <div>
                <h1 className="text-xl font-[600]">By John Smith</h1>
              </div>
            </div>
            {/* main Curriculum */}
            <div className="mt-10 rounded-xl p-5">
              <h1 className="text-4xl font-bold">Curriculum</h1>
              <hr className="mt-5" />
              <div className="grid sm:grid-cols-5">
                {/* card */}
                <div className="card">
                  <div className="p-14">
                    <div>
                      <h1 className=" text-7xl font-[700]">01</h1>
                    </div>
                    <div>
                      <p className="text-xl mt-5">Introduction to HTML </p>
                    </div>
                  </div>
                </div>
                {/*card2  */}
                <div className="card">
                  <div className="p-14">
                    <div>
                      <h1 className=" text-7xl font-[700]">02</h1>
                    </div>
                    <div>
                      <p className="text-xl mt-5">Styling with CSS </p>
                    </div>
                  </div>
                </div>
                {/* card3 */}
                <div className="card">
                  <div className="p-14">
                    <div>
                      <h1 className=" text-7xl font-[700]">03</h1>
                    </div>
                    <div>
                      <p className="text-xl mt-5">
                        Introduction to <br /> Responsive Design
                      </p>
                    </div>
                  </div>
                </div>
                {/* card4 */}
                <div className="card">
                  <div className="p-14">
                    <div>
                      <h1 className=" text-7xl font-[700]">04</h1>
                    </div>
                    <div>
                      <p className="text-xl mt-5">Design Principles for Web </p>
                    </div>
                  </div>
                </div>
                {/* card5 */}
                <div className="card">
                  <div className="p-14">
                    <div>
                      <h1 className="text-7xl font-[700]">05</h1>
                    </div>
                    <div>
                      <p className="text-xl mt-5">
                        Building a Basic <br /> Website{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* end-card */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
