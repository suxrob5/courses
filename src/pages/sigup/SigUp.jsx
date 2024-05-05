import { End } from "../End";
import LeftSec1 from "./LeftSec1";
import SigUpSec from "./SigUpSec";

export const SigUp = () => {
  return (
    <>
      <div className="sm:w-[90%] w-[95%] max-w-[1519px] mx-auto mt-[50px]">
        <div className="p-10">
          <div className="grid sm:grid-cols-2 grid-cols-1">
            <LeftSec1 />
            {/* Login */}
            <SigUpSec />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <End />
      </div>
    </>
  );
};
