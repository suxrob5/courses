/* eslint-disable react/no-unescaped-entities */
export const Testimonials = () => {
  return (
    <div className="max-w-[1519px] w-[90%] mx-auto mt-20" id="testimonials" data-aos="flip-left">
      <div className="sm:flex justify-between items-center">
        <div>
          <h1 className="sm:text-5xl text-4xl font-[700]">Our Testimonials</h1>
          <p className="text-[#59595AFF] text-2xl mt-5">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum{" "}
            <br /> eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className=" mt-5 sm:-mt-5  px-5 py-4 border font-normal text-2xl p-3 rounded-xl ease-in-out hover:bg-black hover:text-white  active:scale-75">
          View All
        </button>
      </div>
      <main>
        <div className="max-w-[1519px] w-[100%] mx-auto grid sm:grid-cols-2 mt-16 gap-10 grid-cols-1">
          {/* cards */}
          <div className="card bg-[#F7F7F8FF] rounded-xl" data-aos="flip-left">
            <div className="p-10">
              <div>
                <p className="text-[15px] font-[500] text-[#59595AFF]">
                  The web design course provided a solid foundation for me. The
                  instructors <br /> were knowledgeable and supportive, and the
                  interactive learning environment <br /> was engaging. I highly
                  recommend it!
                </p>
              </div>
              {/* user */}
              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center justify-start">
                  <img
                    src="./src/assets/images/HomeImages/user1.svg"
                    alt="user"
                  />
                  <p className="font-[700] text-2xl ml-5">Sarah L</p>
                </div>
                <button className="bg-white rounded-lg px-3 sm:px-5 py-4 sm:text-2xl text-xl font-[500] active:scale-90">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className="card bg-[#F7F7F8FF] rounded-xl" data-aos="flip-left">
            <div className="p-10">
              <div>
                <p className="text-[15px] font-[500] text-[#59595AFF]">
                  The UI/UX design course exceeded my expectations. The
                  instructor's <br /> expertise and practical assignments helped
                  me improve my design skills. I feel <br /> more confident in
                  my career now. Thank you!
                </p>
              </div>
              {/* user */}
              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center justify-start">
                  <img
                    src="./src/assets/images/HomeImages/user2.svg"
                    alt="user"
                  />
                  <p className="font-[700] text-2xl ml-5">Jason M</p>
                </div>
                <button className="bg-white rounded-lg px-3 sm:px-5 py-4 sm:text-2xl text-xl font-[500] active:scale-90">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="card bg-[#F7F7F8FF] rounded-xl" data-aos="flip-left">
            <div className="p-10">
              <div>
                <p className="text-[15px] font-[500] text-[#59595AFF]">
                  The mobile app development course was fantastic! The
                  step-by-step <br /> tutorials and hands-on projects helped me
                  grasp the concepts easily. I'm now <br /> building my own app.
                  Great course!
                </p>
              </div>
              {/* user */}
              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center justify-start">
                  <img
                    src="./src/assets/images/HomeImages/user3.svg"
                    alt="user"
                  />
                  <p className="font-[700] text-2xl ml-5">Emily R</p>
                </div>
                <button className="bg-white rounded-lg px-3 sm:px-5 py-4 sm:text-2xl text-xl font-[500] active:scale-90">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
          {/* card4 */}
          <div className="card bg-[#F7F7F8FF] rounded-xl" data-aos="flip-left">
            <div className="p-10">
              <div>
                <p className="text-[15px] font-[500] text-[#59595AFF]">
                  I enrolled in the graphic design course as a beginner, and it
                  was the perfect <br /> starting point. The instructor's
                  guidance and feedback improved my design <br /> abilities
                  significantly. I'm grateful for this course!
                </p>
              </div>
              {/* user */}
              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center justify-start">
                  <img
                    src="./src/assets/images/HomeImages/user4.svg"
                    alt="user"
                  />
                  <p className="font-[700] text-2xl sm:ml-5 ml-4">Michael K</p>
                </div>
                <button className="bg-white rounded-lg px-3 sm:px-5 py-4 sm:text-2xl text-xl font-[500]">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </main>
    </div>
  );
};
