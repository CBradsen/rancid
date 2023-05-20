import React from "react";
import logo2 from "./rancid-logo-2.png";
import '../Header/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="header">
       <Link to='/'>
      <img className="logo" src={ logo2 } 
     alt="Rancid Tomatillos logo" />
     </Link>
    </header>
  )
};

export default Header;