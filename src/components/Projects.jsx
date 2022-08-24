import "./Projects.scss";
import React, { useState } from "react";

import ProjectCard from "../components/ProjectCard";
import JourneyImage from "../assets/images/app-Journey.png";
import DogPoolImage from "../assets/images/dogpool.png";
import TrackImage from "../assets/images/track__2.png";

function Projects() {
  const [project, setProject] = useState(1);

  return (
    <div className="Projects" id="projects">
      <div className="Projects__container">
        <ProjectCard
          image={TrackImage}
          name="Track"
          info="An expense tracking app, secure login with webtokens, and secure signups with bcryptjs"
          stacks="React.js, axios, redux, react-router-dom, Node, MongoDB, Mongoose, sass, redux,  Express, bcryptjs, jsonwebtoken "
          moreInfo="signup, or use a test account:  email:john Password:smith"
          github="https://github.com/jimmykt/track"
          host="https://track-app-jt.netlify.app/"
          verticalImage={false}
        />
        <ProjectCard
          image={JourneyImage}
          name="Journey"
          info="A journal application for users to post about an idea, day with an image. Like Counter for users, Delete and update functionality"
          stacks="React.js, axios, redux, react-file-base64, Node, MongoDB, Express"
          github="https://github.com/jimmykt/Journey"
          host="https://journey-mern.netlify.app/"
          verticalImage={false}
        />
        <ProjectCard
          image={DogPoolImage}
          name="DogPool"
          info="Dog pool, an application that allows your loved dog to be walked when you are too busy or sick. Dog pool lets you set up a distance on how far of a walk you are going on. The app finds dogs that need a walk within your walking distance for you to pick up and help out a friendly neighbor. This app allows you to explore new walking paths, lets you dog meet new friends and have your dog walked when you aren’t able to walk him."
          stacks="React.js, axios, redux, react-file-base64, Node, MySQL, Express, Google API"
          github="https://github.com/jimmykt/dog-pool"
          host="https://journey-mern.netlify.app/"
          verticalImage={true}
        />
      </div>
    </div>
  );
}

export default Projects;
