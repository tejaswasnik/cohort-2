import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
      >
        About
      </NavLink>
      <NavLink
        to="/product"
        style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
      >
        Product
      </NavLink>
      <NavLink
        to="/courses"
        style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
      >
        Courses
      </NavLink>
      <input type="text" />
    </nav>
  );
};

export default Navbar;
