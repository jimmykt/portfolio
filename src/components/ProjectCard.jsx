import "./ProjectCard.scss";
import GithubIcon from "../assets/Icons/github.png";
import VisitIcon from "../assets/Icons/visit.png";
import React, { useState, useEffect } from "react";

function ProjectCard(props) {
  const [flip, setFlip] = useState(false);
  console.log(props);

  const clickFlip = () => {
    setFlip(!flip);
  };

  return (
    <div className="card" onClick={clickFlip}>
      <div className={"card__inner " + (flip ? "is-flipped" : "")}>
        <div className="card__face card__face--front">
          <img
            className={
              props.verticalImage
                ? "card__image card__image--vertical-imgae"
                : "card__image"
            }
            src={props.image}
            alt="project"
          />
        </div>
        <div className="card__face card__face--back">
          <div className="card__back-content">
            {/* <div className="card__back-img"></div> */}
            <h2 className="card__back-name">{props.name}</h2>
            <p className="card__back-info">{props.info}</p>
            <p className="card__back-stacks">Stacks Used: {props.stacks}</p>
            <p className="card__back-moreInfo">{props.moreInfo}</p>
            <div className="card__back-links">
              <a href={props.github} target="_blank" rel="noreferrer">
                <img
                  className="card__back-icon"
                  src={GithubIcon}
                  alt="Githun"
                />
              </a>
              <a href={props.host} target="_blank" rel="noreferrer">
                <img className="card__back-icon" src={VisitIcon} alt="Githun" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
