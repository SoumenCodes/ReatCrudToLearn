import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-around m-7 border-2 border-black text-3xl">
      <h3>Nav</h3>
      <NavLink
        className={({ isActive }) => `${isActive ? "bg-red-500" : ""} `}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => `${isActive ? "bg-red-500" : ""} `}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => `${isActive ? "bg-red-500" : ""} `}
        to="/services"
      >
        Services
      </NavLink>
    </div>
  );
}

export default Nav;
