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
          <img className="card__image" src={props.image} alt="project" />
        </div>
        <div className="card__face card__face--back">
          <div className="card__content">
            <p className="Project__info">{props.info}</p>
            <p className="Project__stacks">Stacks Used: {props.stacks}</p>
            <p className="Project__moreInfo">{props.moreInfo}</p>
            <div className="Project__links">
              <a href={props.github} target="_blank" rel="noreferrer">
                <img className="Project__icon" src={GithubIcon} alt="Githun" />
              </a>
              <a href={props.host} target="_blank" rel="noreferrer">
                <img className="Project__icon" src={VisitIcon} alt="Githun" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
