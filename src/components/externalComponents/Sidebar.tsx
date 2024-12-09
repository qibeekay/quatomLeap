import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    {
      to: "/admin/dashboard",
      label: "Dashboard",
      iconDefault: "/homeL.png",
      iconHover: "/homeD.png",
    },
    {
      to: "/admin/blogs",
      label: "Blog",
      iconDefault: "/homeL.png",
      iconHover: "/homeD.png",
    },
  ];
  return (
    <div className="w-[260px] absolute left-0 top-0 h-screen bg-white px-4">
      <div>
        {/* logo */}
        <div className="w-full flex items-center justify-center border-b border-[#C8C8C8]">
          <div className="w-[10rem] aspect-square">
            <img className="h-full w-full" src={Logo} alt="Logo" />
          </div>
        </div>

        {/* links */}
        <ul className="flex flex-col gap-3 mt-10">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`flex gap-4 items-center font-bold transition duration-300 ease-in p-4 hover:bg-primary rounded-lg`}
              >
                <div className="">
                  <img className="" src={``} alt="" />
                </div>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
