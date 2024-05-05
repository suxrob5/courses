import { End } from "../End";
import { Benefits } from "./Benefits";
import { FaqSec } from "./FaqSec";
import { HeroSection } from "./HeroSection";
import { OurCoursesSec } from "./OurCoursesSec";
import OurPricing from "./OurPricing";
import { Social } from "./Social";
import { Testimonials } from "./Testimonials";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      {/*  */}
      <div className="mt-28">
        <Social />
      </div>
      {/*  */}
      <div className="mt-20 w-[90%] mx-auto cursor-pointer">
        <img src="./src/assets/images/Container.png" alt="img" />
      </div>
      {/*  */}
      <div>
        <Benefits />
      </div>
      {/*  */}
      <div>
        <OurCoursesSec />
      </div>
      {/*  */}
      <div>
        <Testimonials/>
      </div>
      {/*  */}
      <div>
        <OurPricing/>
      </div>
      <div>
        <FaqSec/>
      </div>
      <div className="end">
        <End/>
      </div>
    </div>
  );
};
