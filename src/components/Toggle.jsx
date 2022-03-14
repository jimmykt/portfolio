import "./Toggle.scss";
import React, { useState } from "react";

function Toggle() {
  const [isActive, setIsActive] = useState("not-active");

  const toggle = () => {
    if (isActive !== "open" || null) {
      setIsActive("open");
    } else {
      setIsActive("");
    }
  };

  return (
    <div className={`nav-icon-5 ${isActive}`} onClick={toggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Toggle;
