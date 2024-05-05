import { Top } from "../../assets/img";

export const Cards = () => {
  return (
    <div
      className="grid sm:grid-cols-3 mx-auto gap-5 mt-10 max-w-[1519px] w-[100%]"
      data-aos="flip-left"
    >
      <div className="bg-white rounded-lg border w-[100%]">
        <div className="p-5">
          <div className=" flex items-center justify-between">
            <h1 className="text-white">.</h1>
            <h1 className="text-7xl font-[800]">01</h1>
          </div>
          <div className="mt-[85px] sm:ml-[30px]">
            <h1 className="text-[24px] font-[600] mt-[30px]">
              Flexible Learning Schedule
            </h1>
            <p className="text-[18px] font-[400]">
              Fit your coursework around your existing <br /> commitments and
              obligations.
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <h1 className="text-white">.</h1>
            <div className="active:scale-75">
              <Top />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white rounded-lg border w-[100%]">
        <div className=" p-5">
          <div className=" flex items-center justify-between">
            <h1 className="text-white">.</h1>
            <h1 className="text-7xl font-[800]">02</h1>
          </div>
          <div className="mt-[85px] sm:ml-[30px]">
            <h1 className="text-[24px] font-[600] mt-[30px]">
              Expert Instruction
            </h1>
            <p className="text-[18px] font-[400]">
              Learn from industry experts who have hands- <br />
              on experience in design and development.
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <h1 className="text-white">.</h1>
            <div className="active:scale-75">
              <Top />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white rounded-lg border w-[100%]">
        <div className=" p-5">
          <div className=" flex items-center justify-between">
            <h1 className="text-white">.</h1>
            <h1 className="text-7xl font-[800]">03</h1>
          </div>
          <div className="mt-[85px] sm:ml-[30px]">
            <h1 className="text-[24px] font-[600] mt-[30px]">
              Diverse Course Offerings
            </h1>
            <p className="text-[18px] font-[400]">
              Explore a wide range of design and <br /> development courses
              covering various topics.
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <h1 className="text-white">.</h1>
            <div className="active:scale-75">
              <Top />
            </div>{" "}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white rounded-lg border w-[100%]">
        <div className=" p-5">
          <div className=" flex items-center justify-between">
            <h1 className="text-white">.</h1>
            <h1 className="text-7xl font-[800]">04</h1>
          </div>
          <div className="mt-[85px] sm:ml-[30px]">
            <h1 className="text-[24px] font-[600] mt-[30px]">
              Updated Curriculum
            </h1>
            <p className="text-[18px] font-[400]">
              Access courses with up-to-date content <br /> reflecting the
              latest trends and industry practices.
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <h1 className="text-white">.</h1>
            <div className="active:scale-75">
              <Top />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white rounded-lg border w-[100%] hidden sm:grid">
        <div className=" p-5">
          <div className=" flex items-center justify-between">
            <h1 className="text-white">.</h1>
            <h1 className="text-7xl font-[800]">05</h1>
          </div>
          <div className="mt-[85px] sm:ml-[30px]">
            <h1 className="text-[24px] font-[600] mt-[30px]">
              Practical Projects and <br /> Assignments
            </h1>
            <p className="text-[18px] font-[400]">
              Develop a portfolio showcasing your skills and <br /> abilities to
              potential employers.
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <h1 className="text-white">.</h1>
            <div className="active:scale-75">
              <Top />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white rounded-lg border w-[100%] hidden sm:grid">
        <div className=" p-5">
          <div className=" flex items-center justify-between">
            <h1 className="text-white">.</h1>
            <h1 className="text-7xl font-[800]">06</h1>
          </div>
          <div className="mt-[85px] sm:ml-[30px]">
            <h1 className="text-[24px] font-[600] mt-[30px]">
              Interactive Learning Environment
            </h1>
            <p className="text-[18px] font-[400]">
              Collaborate with fellow learners, exchanging <br /> ideas and
              feedback to enhance your <br /> understanding.
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <h1 className="text-white">.</h1>
            <div className="active:scale-75">
              <Top />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
