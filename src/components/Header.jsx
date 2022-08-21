import "./Header.scss";

import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import Hamburger from "./Hamburger";

function Header() {
  const [isClick, setIsClick] = useState("dont-show-menu");

  const toggle = () => {
    if (isClick === "dont-show-menu") {
      setIsClick("show-menu");
    } else {
      setIsClick("dont-show-menu");
    }
  };

  return (
    <header className="header">
      <h1 className="header__logo">Jimmy</h1>

      <Hamburger onClick={toggle} />

      <ul className={"header__list " + isClick}>
        <li className="header__list-item">
          <NavLink to="/" className="header__link">
            <a className="header__link" href="#">
              Home
            </a>
          </NavLink>
        </li>
        <li className="header__list-item">
          <a className="header__link" href="/#projects">
            Projects
          </a>
        </li>
        <li className="header__list-item">
          <NavLink to="/contact" className="header__link">
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
