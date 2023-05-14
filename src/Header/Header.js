import React from "react";
import logo from "./rancid-clear.png"
import '../Header/Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={ logo } alt="Rancid Tomatillos logo" />
  
    </header>
  )
};

export default Header;