import "./Header.scss";
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
    <header class="header">
      <h1 className="header__logo">Jimmy Tam</h1>

      <Hamburger onClick={toggle} />

      <ul className={"header__list " + isClick}>
        <li className="header__list-item">
          <a className="header__link" href="#">
            Home
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__link" href="#projects">
            Projects
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
