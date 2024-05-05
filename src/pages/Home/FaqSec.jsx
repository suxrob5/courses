import { Btn, No, Plus } from "../../assets/img";
export const FaqSec = () => {
  return (
    <div
      className="bg-[#fff] w-[90%] mx-auto max-w-[1519px] rounded-xl my-[100px]"
      id="FAQ"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="sm:p-20">
        <div className="grid sm:grid-cols-2 grid-cols-1">
          {/* 1 */}
          <div>
            <h1 className="sm:text-5xl text-[30px] font-[700]">
              Frequently <br /> Asked Questions
            </h1>
            <p className="text-xl text-[#333333FF] mt-5">
              Still you have any questions? Contact our <br /> Team via
              support@skillbridge.com
            </p>
            <button className="rounded-lg bg-white py-3 px-5 border sm:mt-20 mt-10 text-2xl">
              See All FAQ’s
            </button>
          </div>
          {/* 2 */}
          <div>
            <div className="p-5 bg-white">
              {/* card */}
              <div
                className="card border rounded-xl"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div className="container flex items-center justify-between w-[95%] mt-5 mx-auto">
                  <p className="text-xl font-[500]">
                    Can I enroll in multiple courses at once?
                  </p>
                  <div className="bg-[#FFF4E6FF] rounded-lg">
                    <No />
                  </div>
                </div>
                <hr className="mt-5" />
                <div className="mt-5 w-[95%] mx-auto">
                  <p className="text-xl font-[400] text-[#4C4C4DFF]">
                    Absolutely! You can enroll in multiple courses
                    simultaneously and access them at your <br /> convenience.
                  </p>
                </div>
                <div className=" bg-[#F7F7F8FF] rounded-xl mt-5">
                  <div className="py-3 px-5 flex items-center justify-between">
                    <h1 className="text-xl">
                      Enrollment Process for Different Courses
                    </h1>
                    <button>
                      <Btn />
                    </button>
                  </div>
                </div>
              </div>
              {/* card2 */}
              <div
                className="card border rounded-xl mt-5"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl">
                      What kind of support can I expect from instructors?
                    </h1>
                    <button className=" cursor-pointer">
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
              {/* card3 */}
              <div
                className="card border rounded-xl mt-5"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl">
                      Are the courses self-paced or do they have specific start
                      and end <br /> dates?
                    </h1>
                    <button className=" cursor-pointer">
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
              {/* card4 */}
              <div
                className="card border rounded-xl mt-5"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl">
                      Are there any prerequisites for the courses?
                    </h1>
                    <button className=" cursor-pointer">
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
              {/* card5 */}
              <div
                className="card border rounded-xl mt-5"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl">
                      Can I download the course materials for offline access?
                    </h1>
                    <button className=" cursor-pointer">
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
