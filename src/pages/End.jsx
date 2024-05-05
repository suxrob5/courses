export const End = () => {
  return (
    <>
      <div className="w-[100%] bg-white max-w-[1519px]">
        <div className="p-20 grid sm:grid-cols-2">
          <ul className="grid grid-cols-1 gap-2">
            <li>
              <img src="./src/assets/images/Logo.svg" alt="" />
            </li>
            <li>
              <i className="fa-solid fa-envelope text-2xl"></i>
              <a href="#" className="ml-2 text-xl">
                hello@skillbridge.com
              </a>
            </li>
            <li>
              <i className="fa-solid fa-phone text-2xl"></i>
              <a href="#" className="ml-2 text-xl">
                +91 91813 23 2309
              </a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot text-2xl"></i>
              <a href="#" className="ml-2 text-xl">
                Somewhere in the World
              </a>
            </li>
          </ul>
          {/* ul-2 */}
          <div className="grid sm:grid-cols-3 mt-10 sm:-mt-10">
            <ul className="grid grid-cols-1 gap-2 text-xl font-normal text-[#59595AFF]">
              <li className="font-[600] text-black">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#benefits">Benefits</a>
              </li>
              <li>
                <a href="#ourcourses">Our Courses</a>
              </li>
              <li>
                <a href="#testimonials">Our Testimonials</a>
              </li>
              <li>
                <a href="#FAQ">Our FAQ</a>
              </li>
            </ul>
            {/*  */}
            <ul className="grid grid-cols-1 gap-2 text-xl font-normal text-[#59595AFF]">
              <li className="font-[600] text-black">
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Achievements</a>
              </li>
              <li>
                <a href="#">Our Goals</a>
              </li>
            </ul>
            {/*  */}
            <ul>
              <li className="font-[600] text-black">
                <a href="#">Social Profiles</a>
              </li>
              <div className="grid grid-cols-3 gap-2 text-xl font-normal text-[#59595AFF] mt-5">
                <li className="font-[600] text-black">
                  <a href="https://facebook.com" target="blank">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com" target="blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
