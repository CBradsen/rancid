import React from "react";
import "../Footer/Footer.css";
import rudy from "./rancid-rudy.png"

const Footer = () => {
  return (
    <footer className="footer">
      <img className="rancid-rudy" src={ rudy } 
     alt="Rancid Rudy logo" />
    </footer>
  );
};

export default Footer;