import React, { useState } from "react";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";
function Header() {
  const [toggle, setToggle] = useState(false);
  const menuList = [
    { id: 1, title: "HOME" },
    { id: 2, title: "ABOUT" },
    { id: 3, title: "SERVICE" },
    { id: 4, title: "PORTFOLIO" },
    { id: 5, title: "CONTENT" },
  ];

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-[24px] text-white font-bold ">
          ZINKO <span className="text-red-500">NAING</span>
        </h1>
      </div>
      <div className="hidden md:flex gap-4">
        {menuList.map((item) => (
          <div key={item.id}>
            <h2 className="text-white text-[15px] hover:border-[1px] border-red-500 rounded-full px-3 py-1 cursor-pointer">
              {item.title}
            </h2>
          </div>
        ))}
        <h2 className="text-white text-[15px] hover:border-[1px] border-red-500 rounded-full hover:bg-gradient-to-r from-red-500 to-red-800 px-3 py-1 cursor-pointer ">
          Hire me
        </h2>
      </div>
      <div className="md:hidden">
        {!toggle ? (
          <HiBars3BottomRight
            onClick={() => setToggle(!toggle)}
            className="text-white text-[22px] cursor-pointer"
          />
        ) : (
          <HiOutlineXMark
            onClick={() => setToggle(!toggle)}
            className="text-white text-[22px] cursor-pointer"
          />
        )}
        {toggle ? <MenuOverlay menuList={menuList} /> : null}
      </div>
    </div>
  );
}

export default Header;
