import React from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";

function Header() {
  const [toggle, settoggle] = usestate(false);
  const menuList = [
    {
      id: 1,
      title: "HOME",
    },
    {
      id: 2,
      title: "ABOUT",
    },
    {
      id: 3,
      title: "SERVICE",
    },
    {
      id: 4,
      title: "PORTFOLIO",
    },
    {
      id: 5,
      title: "CONTENT",
    },
  ];

  return (
    <div className="flex items- justify-between">
      <div>
        <h1 className="text-[24px] text-white font-bold ">
          ZINKO <span className="text-red-500">NAING</span>
        </h1>
      </div>
      <div className=" hidden md:flex gap-4">
        {menuList.map((item) => (
          <div>
            <h2 className="text-whiter text-[15px] hover:border-[1px] border-red-500 rounded-full px-3 py-1 cursor-pointer">
              {item.title}
            </h2>
          </div>
        ))}
        <h2 className="text-whiter text-[15px] hover:border-[1px] border-red-500 rounded-full hover:bg-gradient-to-r from-red-500 to-red-800 px-3 py-1 cursor-pointer">
          Hire me
        </h2>
      </div>
      {/* <div className="md:hidden">
        {!toggle ? (
          <HiMiniBars3BottomLeft
            onClick={() => settoggle(!toggle)}
            className="text-white text-[22px]"
          />
        ) : (
          <HiXMark
            onClick={() => settoggle(!toggle)}
            className="text-white text-[22px]"
          />
        )}
      </div> */}
    </div>
  );
}

export default Header;
