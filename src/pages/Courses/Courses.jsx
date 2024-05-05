import { AppDevolopment } from "./AppDevolopment";
import FrontendWeb from "./FrontendWeb";
import GraphicDesign from "./GraphicDesign";
import { Header } from "./Header";
import { MobileApp } from "./MobileApp";
import { WebDesign } from "./WebDesign";
import { End } from "../End";

export const Courses = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      {/*  */}
      <div>
        <WebDesign />
      </div>
      {/*  */}
      <div>
        <MobileApp />
      </div>
      {/*  */}
      <div>
        <AppDevolopment />
      </div>
      {/*  */}
      <div>
        <GraphicDesign />
      </div>
      {/*  */}
      <div>
        <FrontendWeb />
      </div>
      {/* end */}
      <div className="mt-[100px]">
        <End/>
      </div>
    </>
  );
};
