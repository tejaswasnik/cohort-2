import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <div className="logo">
          <h1>Horizon Courts</h1>
        </div>
      </div>
      <div className="middle">
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Coaches</a>
        <a href="#">Events</a>
        <a href="#">Contacts</a>
      </div>
      <div className="right">
        <button>Book now <i class="ri-arrow-right-up-line"></i></button>
      </div>
    </nav>
  );
};

export default Navbar;
