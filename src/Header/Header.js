import React from "react";
import logo from "./rancid-clear.png"
import '../Header/Header.css';
import { Link } from 'react-router-dom'

const Header = ({resetMainPage}) => {
    const handleReturn = () => {
    resetMainPage();
  };
  return (
    <header className="header">
       <Link to='/'>
      <img className="logo" src={ logo } onClick={() => {handleReturn()}}
     alt="Rancid Tomatillos logo" />
     </Link>
  
    </header>
  )
};

export default Header;