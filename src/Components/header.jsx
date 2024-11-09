import React from "react";

function Header() {
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
    <div>
      <div>
        <h1 className="text-[24px] text-white font-bold ">
          ZINKO <span className="text-red-500">NAING</span>
        </h1>
      </div>
      <div>
        {menuList.map((item) => (
          <div>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
