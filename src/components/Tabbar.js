import React from "react";
import { Link } from "react-router-dom";
import './Searchbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Tabbar() {
  return (
    <>
    <nav className="nav">
    <div className="ham">
          <a href ="#">
            <GiHamburgerMenu />
          </a>
        </div>
     <div className="head">
     <h2> Welcome To Pokedex! </h2>
      </div>
      <div className="menu">
        <ul>
          <li>
        <Link to = "/">
            Home
            </Link>
            </li>
            <li>
            <a href="#">
            About
            </a>
            </li>
            <li>
            <a href="#">
            Games
            </a>
            </li>
        </ul>
      </div>
    </nav>
    </>
  );
}