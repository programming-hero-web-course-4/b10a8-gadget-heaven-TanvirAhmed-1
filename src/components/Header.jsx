import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerlink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="Statistics">Statistics</Link>
      </li>
      <li>
        <Link to="Dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="bg-white">
      <div className="navbar bg-white max-w-[1280px] mx-auto font-sora py-7">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#9538E2] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {headerlink}
            </ul>
          </div>
          <a className="btn btn-ghost md:text-4xl  text-2xl font-bold text-black">
            Gadget Heaven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-600 text-xl font-semibold">
            {headerlink}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <button className=" border-2 rounded-full border-solid border-gray-600 p-2">
            <img
              className=" bg-white  w-4"
              src="https://img.icons8.com/?size=100&id=sxzNrtpZazQb&format=png&color=000000"
              alt=""
              srcset=""
            />
          </button>
          <button className=" border-2 rounded-full border-solid border-gray-600 p-2">
            <img
              className=" bg-white  w-4"
              src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000"
              alt=""
              srcset=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
