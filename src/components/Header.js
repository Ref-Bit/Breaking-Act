import React from "react";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header className="text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <span className="flex items-center lg:items-center lg:justify-center mb-4 md:mb-0">
          <img src={logo} alt="logo" className="w-32" />
        </span>
      </div>
    </header>
  );
};

export default Header;
