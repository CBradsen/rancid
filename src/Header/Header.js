import React from "react";
import logo from "./rancid-clear.png";
import '../Header/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="header">
      <Link to='/'>
      <img className="logo" src={ logo } 
     alt="Rancid Tomatillos logo" />
     </Link>
     <Link to="/rankings">
      <button>Sort By Ratings</button>
      </Link>
    </header>
  )
};

export default Header;