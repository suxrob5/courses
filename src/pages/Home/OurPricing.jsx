import { No, Yes } from "../../assets/img";

const OurPricing = () => {
  return (
    <>
      <div
        className="w-[90%] max-w-[1519px] mx-auto mt-[100px]"
        id="pricing"
        data-aos="zoom-in"
      >
        <div className="sm:flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-[700]">Our Pricing</h1>
            <p className="text-[#59595AFF] text-2xl mt-5">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem <br /> nibh
              et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className="bg-[#F7F7F8FF] p-5 border rounded-xl w-[200px] mt-5">
            <div className=" flex items-center justify-between">
              <button className="py-4 px-6 rounded-lg font-[500] bg-[#FF9500FF] text-white active:scale-50">
                Monthly
              </button>
              <button className="py-4 px-6 rounded-lg ml-5 font-[500] active:scale-50 hover:border">
                Yearly
              </button>
            </div>
          </div>
        </div>
        {/* cards */}
        <main>
          <div className="border grid sm:grid-cols-2 grid-cols-1 bg-[#F7F7F8FF] rounded-xl gap-5 py-16 px-5 mt-16">
            {/* card */}
            <div
              className="card border rounded-xl bg-white"
              data-aos="zoom-in-right"
            >
              <div className="container w-[95%] mx-auto mt-10">
                <button className="text-2xl  bg-[#FFF9F0FF] py-5 w-[100%] border border-[#f5e2c7] rounded-xl active:scale-95">
                  Free Plan
                </button>
              </div>
              <div className="flex justify-center">
                <h1 className="font-[700] text-[105px]">
                  $0
                  <span className="font-[500] text-2xl text-[#59595AFF]">
                    /month
                  </span>
                </h1>
              </div>
              {/* items */}
              <div className="p-6">
                <div className="border rounded-xl mt-5">
                  <div className="w-[90%] mx-auto flex items-center justify-center my-10">
                    <h1 className="font-[600] text-3xl">Available Features</h1>
                  </div>
                  <ul className="p-5 gap-5 grid mt-10">
                    <li className="flex p-3 items-center border rounded-lg">
                      <Yes />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Access to selected free courses.
                      </a>
                    </li>
                    <li className="flex p-3 items-center border rounded-lg">
                      <Yes />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Limited course materials and resources.
                      </a>
                    </li>
                    <li className="flex p-3 items-center border rounded-lg">
                      <Yes />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Basic community support.
                      </a>
                    </li>
                    <li className="flex p-3 items-center border rounded-lg">
                      <Yes />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        No certification upon completion.Ad-supported platform.
                      </a>
                    </li>
                    <li className="flex p-3 items-center border rounded-lg">
                      <Yes />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Ad-supported platform.
                      </a>
                    </li>
                    <li className="flex p-3 items-center border rounded-lg">
                      <No />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Access to exclusive Pro Plan community forums.
                      </a>
                    </li>
                    <li className="flex p-3 items-center border rounded-lg">
                      <No />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Early access to new courses and updates.
                      </a>
                    </li>
                  </ul>
                  {/* <div className="w-[95%] mx-auto"> */}
                  <button className="bg-[#FF9500FF] py-5 text-white w-[100%] rounded-b-xl active:scale-95 active:opacity-50">
                    Get Started
                  </button>
                  {/* </div> */}
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div
              className="card border rounded-xl bg-white"
              data-aos="zoom-in-left"
            >
              <div className="container w-[95%] mx-auto mt-10">
                <button className="text-2xl  bg-[#FFF9F0FF] py-5 w-[100%] border border-[#f5e2c7] rounded-xl active:scale-95">
                  Free Plan
                </button>
              </div>
              <div className="flex justify-center">
                <h1 className="font-[700] text-[105px]">
                  $79
                  <span className="font-[500] text-2xl text-[#59595AFF]">
                    /month
                  </span>
                </h1>
              </div>
              {/* items */}
              <div className="sm:p-6">
                <div className="border rounded-xl mt-5">
                  <div className="w-[90%] mx-auto flex items-center justify-center my-10">
                    <h1 className="font-[600] text-3xl">Available Features</h1>
                  </div>
                  <ul className="sm:p-5 gap-5 grid mt-10">
                    <li className="flex p-3 items-center border rounded-lg">
                      <Yes />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Unlimited access to all courses.
                      </a>
                    </li>
                    <li className="flex p-3 items-center border rounded-lg">
                      <Yes />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Unlimited course materials and resources.
                      </a>
                    </li>
                    <li className="flex p-3 items-center border rounded-lg">
                      <Yes />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Priority support from instructors.
                      </a>
                    </li>
                    <li className="flex p-3 items-center border rounded-lg">
                      <Yes />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Course completion certificates.
                      </a>
                    </li>
                    <li className="flex p-3 items-center border rounded-lg">
                      <Yes />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Ad-free experience.
                      </a>
                    </li>
                    <li className="flex p-3 items-center border rounded-lg">
                      <Yes />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Access to exclusive Pro Plan community forums.
                      </a>
                    </li>
                    <li className="flex p-3 items-center border rounded-lg">
                      <Yes />
                      <a href="#" className="text-2xl ml-3 font-[400]">
                        Early access to new courses and updates.
                      </a>
                    </li>
                  </ul>
                  <button className="bg-[#FF9500FF] py-5 text-white w-[100%] rounded-b-xl active:opacity-50 active:scale-95">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default OurPricing;
