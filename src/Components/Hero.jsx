import React from "react";

function Hero() {
  return (
    <div className="flex md:flex-shrink  gap-7">
      <div className="mb-10">
        <p className="text-white text-[13px]">
          HELLO THERE, WELCOME TO MY SITE
        </p>
        <p className="text-white text-[40px] font-bold">I'm Zin Ko Naing</p>
        <p className="text-red-500 text-[40px] font-bold">
          I'm Full Stack Developer
        </p>
        <p className="text-white text-[40px] font-bold">& UI/UX Designer</p>
        <div className="mt-4 flex gap-4">
          <button className="text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full  border-[2px] hover:border-white">
            SEE PORTFOLIO
          </button>
          <button className="text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full border-[2px] hover:border-white ">
            CONTACT ME
          </button>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="h-[330px] p-2 w-[250px] bg-gradient-to-b from-[#ff004d] to-[#2a26b8]">
          <img
            src="./public/img1.jpeg"
            className="h-full w-[250px] object-cover rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
