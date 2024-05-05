import { End } from "../End";

const CoursesOpen = () => {
  return (
    <>
      <div className="w-[90%] max-w-[1519px] mx-auto mt-10" id="mobile">
        <div>
          <div className="p-5">
            <div className="sm:flex items-center justify-between">
              <h1 className="text-6xl font-bold">Web Design Fundamentals</h1>
              <p className="text-xl font-normal mt-10 sm:mt-0">
                Learn the fundamentals of web design, including HTML, CSS, and
                <br />
                responsive design principles. Develop the skills <br /> to
                create visually appealing and user-friendly websites.
              </p>
            </div>
            <hr className="mt-[50px]" />
            <div className="w-[90%] mt-[50px] mx-auto">
              <img
                src="./src/assets/images/CoursesImg/img1.jpeg"
                className="w-[100%] sm:h-[500px]"
                alt="img"
              />
            </div>

            {/* cards------------------------------------------------ */}

            <div className="grid sm:grid-cols-2 mt-32 gap-5">
              {/* card1 */}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className="flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">01</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Introduction to UI/UX Design
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Understanding UI/UX Design Principles
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Importance of User-Centered Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#FFEACCFF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ml-2">45 Minuter</span>
                  </button>
                </div>
              </div>
              {/* card-2*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">02</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      User Research and Analysis
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Conducting User Research and Interviews
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Analyzing User Needs and Behavior
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating User Personas and Scenarios
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-3*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">03</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Wireframing and Prototyping
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Introduction to Wireframing Tools and Techniques
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating Low-Fidelity Wireframes
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Prototyping and Interactive Mockups
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-4*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">04</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Visual Design and Branding
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Color Theory and Typography in UI Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Visual Hierarchy and Layout Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating a Strong Brand Identity
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-5*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">05</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Usability Testing and Iteration
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Usability Testing Methods and Techniques
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Analyzing Usability Test Results
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Iterating and Improving UX Designs
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* end-cards */}
            </div>
          </div>
        </div>
      </div>
      {/* UI uX/------------------------------------------------------------------------------------------------- */}
      <div className="w-[90%] max-w-[1519px] mx-auto mt-10" id="uiux">
        <div>
          <div className="p-5">
            <div className="sm:flex items-center justify-between">
              <h1 className="text-6xl font-bold">UI/UX Design</h1>
              <p className="text-xl font-normal mt-10 sm:mt-0">
                Master the art of creating intuitive user interfaces (UI) and
                enhancing user experiences (UX). Learn design principles, <br />
                wireframing, prototyping, and usability testing techniques.
              </p>
            </div>
            <hr className="mt-[50px]" />
            <div className=" mt-[50px] mx-auto flex items-center justify-center">
              <img
                src="./src/assets/images/CoursesImg/img4.jpeg"
                className="w-[60%]"
                // className="w-[100%] sm:h-[500px]"
                alt="img"
              />
            </div>

            {/* cards------------------------------------------------ */}

            <div className="grid sm:grid-cols-2 mt-32 gap-5">
              {/* card1 */}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className="flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">01</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Introduction to UI/UX Design
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Understanding UI/UX Design Principles
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Importance of User-Centered Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#FFEACCFF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ml-2">45 Minuter</span>
                  </button>
                </div>
              </div>
              {/* card-2*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">02</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      User Research and Analysis
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Conducting User Research and Interviews
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Analyzing User Needs and Behavior
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating User Personas and Scenarios
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-3*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">03</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Wireframing and Prototyping
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Introduction to Wireframing Tools and Techniques
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating Low-Fidelity Wireframes
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Prototyping and Interactive Mockups
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-4*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">04</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Visual Design and Branding
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Color Theory and Typography in UI Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Visual Hierarchy and Layout Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating a Strong Brand Identity
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-5*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">05</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Usability Testing and Iteration
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Usability Testing Methods and Techniques
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Analyzing Usability Test Results
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Iterating and Improving UX Designs
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* end-cards */}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile-app/------------------------------------------------------------------------------------------------- */}
      <div className="w-[90%] max-w-[1519px] mx-auto mt-10" id="mobileapp">
        <div>
          <div className="p-5">
            <div className="sm:flex items-center justify-between">
              <h1 className="text-6xl font-bold">Mobile App Development</h1>
              <p className="text-xl font-normal mt-10 sm:mt-0">
                Dive into the world of mobile app development. Learn to build
                native iOS and <br />
                Android applications using industry-leading like Swift and
                Kotlin.
              </p>
            </div>
            <hr className="mt-[50px]" />
            <div className="w-[90%] mt-[50px] mx-auto flex items-center justify-center">
              <img
                src="./src/assets/images/CoursesImg/7.jpeg"
                className="w-[50%]"
                alt="img"
              />
            </div>

            {/* cards------------------------------------------------ */}

            <div className="grid sm:grid-cols-2 mt-32 gap-5">
              {/* card1 */}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className="flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">01</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Introduction to UI/UX Design
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Understanding UI/UX Design Principles
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Importance of User-Centered Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#FFEACCFF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ml-2">45 Minuter</span>
                  </button>
                </div>
              </div>
              {/* card-2*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">02</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      User Research and Analysis
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Conducting User Research and Interviews
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Analyzing User Needs and Behavior
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating User Personas and Scenarios
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-3*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">03</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Wireframing and Prototyping
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Introduction to Wireframing Tools and Techniques
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating Low-Fidelity Wireframes
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Prototyping and Interactive Mockups
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-4*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">04</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Visual Design and Branding
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Color Theory and Typography in UI Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Visual Hierarchy and Layout Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating a Strong Brand Identity
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-5*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">05</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Usability Testing and Iteration
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Usability Testing Methods and Techniques
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Analyzing Usability Test Results
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Iterating and Improving UX Designs
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* end-cards */}
            </div>
          </div>
        </div>
      </div>

      {/* grafik-dizayn------------------------------------------------------------------------------------------------- */}
      <div className="w-[90%] max-w-[1519px] mx-auto mt-10" id="graphic">
        <div>
          <div className="p-5">
            <div className="sm:flex items-center justify-between">
              <h1 className="text-6xl font-bold">
                Graphic Design for Beginners
              </h1>
              <p className="text-xl font-normal mt-10 sm:mt-0">
                Discover the fundamentals of graphic design, including
                typography, color theory, layout design, and <br />
                image manipulation techniques. Create visually stunning designs
                for print and digital media.
              </p>
            </div>
            <hr className="mt-[50px]" />
            <div className="w-[90%] mt-[50px] mx-auto flex items-center justify-center">
              <img
                src="./src/assets/images/CoursesImg/10.jpeg"
                className="w-[50%]"
                alt="img"
              />
            </div>

            {/* cards------------------------------------------------ */}

            <div className="grid sm:grid-cols-2 mt-32 gap-5">
              {/* card1 */}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className="flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">01</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Introduction to UI/UX Design
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Understanding UI/UX Design Principles
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Importance of User-Centered Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#FFEACCFF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ml-2">45 Minuter</span>
                  </button>
                </div>
              </div>
              {/* card-2*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">02</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      User Research and Analysis
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Conducting User Research and Interviews
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Analyzing User Needs and Behavior
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating User Personas and Scenarios
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-3*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">03</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Wireframing and Prototyping
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Introduction to Wireframing Tools and Techniques
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating Low-Fidelity Wireframes
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Prototyping and Interactive Mockups
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-4*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">04</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Visual Design and Branding
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Color Theory and Typography in UI Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Visual Hierarchy and Layout Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating a Strong Brand Identity
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-5*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">05</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Usability Testing and Iteration
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Usability Testing Methods and Techniques
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Analyzing Usability Test Results
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Iterating and Improving UX Designs
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* end-cards */}
            </div>
          </div>
        </div>
      </div>

      {/*-Fronted------------------------------------------------------------------------------------------------- */}
      <div className="w-[90%] max-w-[1519px] mx-auto mt-10" id="fronted">
        <div>
          <div className="p-5">
            <div className="sm:flex items-center justify-between">
              <h1 className="text-6xl font-bold">Front-End Web Development</h1>
              <p className="text-xl font-normal mt-10 sm:mt-0">
                Become proficient in front-end web development. Learn HTML, CSS,
                JavaScript, <br />
                and popular frameworks like Bootstrap and React. Build
                interactive and responsive websites.
              </p>
            </div>
            <hr className="mt-[50px]" />
            <div className="w-[90%] mt-[50px] mx-auto flex items-center justify-center">
              <img
                src="./src/assets/images/CoursesImg/13.jpeg"
                className="w-[50%]"
                alt="img"
              />
            </div>

            {/* cards------------------------------------------------ */}

            <div className="grid sm:grid-cols-2 mt-32 gap-5">
              {/* card1 */}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className="flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">01</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Introduction to UI/UX Design
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Understanding UI/UX Design Principles
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Importance of User-Centered Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#FFEACCFF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ml-2">45 Minuter</span>
                  </button>
                </div>
              </div>
              {/* card-2*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">02</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      User Research and Analysis
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Conducting User Research and Interviews
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Analyzing User Needs and Behavior
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating User Personas and Scenarios
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-3*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">03</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Wireframing and Prototyping
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Introduction to Wireframing Tools and Techniques
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating Low-Fidelity Wireframes
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Prototyping and Interactive Mockups
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-4*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">04</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Visual Design and Branding
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Color Theory and Typography in UI Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Visual Hierarchy and Layout Design
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Creating a Strong Brand Identity
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* card-5*/}
              <div className="card border bg-white rounded-xl">
                <div className="p-10">
                  <div className=" flex justify-between items-center">
                    <p className="text-[#fff]">.</p>
                    <h1 className="text-[50px] font-[700]">05</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold">
                      Usability Testing and Iteration
                    </h1>
                  </div>
                  {/*mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Usability Testing Methods and Techniques
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 01</p>
                    </div>
                    <button className="text-xl rounded-md border px-5 py-3 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">1 Hour</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Analyzing Usability Test Results
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 02</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                  {/* mini-card */}
                  <div className="border sm:flex items-center justify-between p-5 w-[98%] mx-auto mt-10 lo">
                    <div>
                      <h1 className="text-2xl font-medium">
                        Iterating and Improving UX Designs
                      </h1>
                      <p className="text-xl text-[#59595AFF]">Lesson 03</p>
                    </div>
                    <button className="text-xl rounded-md border px-6 py-4 active:scale-75 bg-[#F7F7F8FF] mt-10 sm:mt-0">
                      <i className="fa-regular fa-clock"></i>
                      <span className="ml-2">45 Minuter</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* end-cards */}
            </div>
          </div>
        </div>
      </div>

      {/* end */}
      <div>
        <End />
      </div>
    </>
  );
};

export default CoursesOpen;
