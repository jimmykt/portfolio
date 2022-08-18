import "./ProjectCard.scss";
import GithubIcon from "../assets/Icons/github.png";
import VisitIcon from "../assets/Icons/visit.png";
import React, { useState, useEffect } from "react";

function ProjectCard(props) {
  const [flip, setFlip] = useState(false);

  const clickFlip = () => {
    setFlip(!flip);
    console.log(flip);
  };

  return (
    <div className="card" onClick={clickFlip}>
      <div className={"card__inner " + (flip ? "is-flipped" : "")}>
        <div className="card__face card__face--front">
          <h2>front</h2>
        </div>
        <div className="card__face card__face--back">
          <div className="card__content">
            <img src={GithubIcon} alt="git" />
            <h2>back</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
