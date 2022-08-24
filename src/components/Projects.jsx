import "./Projects.scss";
import React, { useState } from "react";

import ProjectCard from "../components/ProjectCard";
import JourneyImage from "../assets/images/app-Journey.png";
import DogPoolImage from "../assets/images/dogpool.png";
import TrackImage from "../assets/images/track.png";
import LeftArrow from "../assets/Icons/arrow-left.png";
import RightArrow from "../assets/Icons/arrow-right.png";

import data from "../data";

function Projects() {
  const [displayProject, setDisplayProject] = useState(0);

  const length = data.length;

  const nextClick = () => {
    setDisplayProject(displayProject === length - 1 ? 0 : displayProject + 1);
    console.log(displayProject);
  };
  const prevClick = () => {
    setDisplayProject(displayProject === 0 ? length - 1 : displayProject - 1);
    console.log(displayProject);
  };
  console.log(data[0].image);
  console.log(length);

  return (
    <div className="Projects" id="projects">
      <img
        className="Projects__arrow Projects__arrow--left"
        src={LeftArrow}
        onClick={prevClick}
        alt="left arrow"
      />

      <div className={"Projects__container"}>
        <ProjectCard
          image={data[displayProject].image}
          name={data[displayProject].name}
          info={data[displayProject].info}
          stacks={data[displayProject].stacks}
          moreInfo={data[displayProject].moreInfo}
          github={data[displayProject].github}
          host={data[displayProject].host}
          verticalImage={data[displayProject].verticalImage}
        />
      </div>
      <img
        className="Projects__arrow Projects__arrow--right"
        src={RightArrow}
        onClick={nextClick}
        alt="right arrow"
      />
    </div>
  );
}

export default Projects;
