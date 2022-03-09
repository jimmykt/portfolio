import "./Projects.scss";
import Project from "../components/Project";
import JourneyImage from "../assets/images/app-Journey.png";

function Projects() {
  return (
    <div className="Projects">
      <Project
        image={JourneyImage}
        name="Journey"
        info="A journal application for users to post about an idea, day with an image. Like Counter for users, Delete and update functionality"
        stacks="React.js, axios, redux, react-file-base64, Node, MongoDB, Express"
        github="https://github.com/jimmykt/Journey"
        host="https://journey-mern.netlify.app/"
      />
    </div>
  );
}

export default Projects;
