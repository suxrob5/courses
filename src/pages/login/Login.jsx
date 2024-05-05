import { End } from "../End";
import LeftSec from "./LeftSec";
import LoginSec from "./LoginSec";

export const Login = () => {
  return (
    <div >
      <div className="sm:w-[90%] w-[95%] max-w-[1519px] mx-auto mt-[50px]">
        <div className="p-10">
          <div className="grid sm:grid-cols-2 grid-cols-1">
            <LeftSec />
            {/* Login */}
            <div>
              <LoginSec />
            </div>
          </div>
        </div>
      </div>
      <End />
    </div>
  );
};
