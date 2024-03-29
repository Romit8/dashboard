import React from "react";
import { Link } from 'react-scroll';
import Home from "../components/Home";
import logoImage from "../image/logo.jpg"
export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm fixed-top bg-light" id="navbar">
        <div className="container-fluid">
          <div className="logo">
          <a className="navbar-brand" href="#">
              <img src={logoImage} alt="Dashboard Logo" />
            </a>
          </div>
          <div className="navbar-content ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="home" smooth={true} duration={500} className="nav-link">
                  Home  
                </Link>
              </li>
              <li className="nav-item">
                <Link to="card" smooth={true} duration={500} className="nav-link">
                  Card
                </Link>
              </li>
              <li className="nav-item">
                <Link to="table" smooth={true} duration={500} className="nav-link">
                  Table
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Home/>
    </header>
  );
}