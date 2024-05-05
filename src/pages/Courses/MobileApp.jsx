import { NavLink } from "react-router-dom";

export const MobileApp = () => {
  return (
    <>
      <div className="w-[90%] max-w-[1519px] mx-auto mt-[150px]">
        <div className="bg-white mx-auto rounded-xl">
          <div className="p-10">
            <div className="sm:flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold">UI/UX Design</h1>
                <p className="text-xl mt-5 font-normal">
                  Master the art of creating intuitive user interfaces (UI) and
                  enhancing user experiences (UX). Learn design principles,{" "}
                  <br />
                  wireframing, prototyping, and usability testing techniques.
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
                src="./src/assets/images/CoursesImg/img4.jpeg"
                alt="images"
              />
              <img
                src="./src/assets/images/CoursesImg/img5.jpeg"
                alt="images"
              />
              <img
                src="./src/assets/images/CoursesImg/img6.jpeg"
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
                <h1 className="text-xl font-[600]">By Emily Johnson</h1>
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
                      <p className="text-xl mt-5">
                        Introduction to UI/UX <br /> Design
                      </p>
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
                      <p className="text-xl mt-5">
                        User Research and <br /> Personas
                      </p>
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
                        Wireframing and <br /> Prototyping
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
                      <p className="text-xl mt-5">
                        Visual Design and <br /> Branding
                      </p>
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
                        Usability Testing and <br /> Iteration
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
}
