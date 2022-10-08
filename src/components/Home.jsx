import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#CCD6F6]">
          Nathan Soum
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892B0]">
          I'm a Full-Stack Developer.
        </h2>
        <p className="text-[#8892B0] py-4 max-w-[700px]">
          I'm a Full-Stack Developer passionate about learning and creating
          applications! Currently, I'm focused on building passion projects
          while becoming more and more familiar with code.
        </p>
        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center max-w-[160px] hover:bg-pink-600 hover:border-pink-600">
          View Work
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
