import React from "react";
import 'remixicon/fonts/remixicon.css';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <img src="https://sher-assignment-28.vercel.app/assets/logo.svg" alt="logo" />
        </div>
        <div className="links">
          <a href="#">About Me</a>
          <a href="#">Portfolio</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
        </div>
      </div>
      <div className="right">
        <button>
          Book a Call
          <i class="ri-arrow-right-up-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
