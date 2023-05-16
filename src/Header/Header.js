import React from "react";
import logo from "./rancid-clear.png"
import '../Header/Header.css';

const Header = () => {
  return (
    <header className="header">
       <h1>Rancid</h1>
      <img className="logo" src={ logo } 
     alt="Rancid Tomatillos logo" />
  
    </header>
  )
};

export default Header;