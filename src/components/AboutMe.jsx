import "./AboutMe.scss";
import GithubIcon from "../assets/Icons/github.png";
import LinkedinIcon from "../assets/Icons/linkedin.png";
import Copied from "../components/Copied";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="AboutMe__containerOne">
        <h1>Got a problem to solve?</h1>
        <p className="AboutMe__name">Jimmy Tam</p>
        <div className="AboutMe__email-container">
          <a className="AboutMe__email" href="mailto:jimmykkst@gmail.com">
            jimmykkst@gmail.com
          </a>
          <Copied />
        </div>

        <div className="AboutMe__Copied-container"></div>
      </div>

      <div className="AboutMe__containerTwo">
        <a href="https://github.com/jimmykt">
          <img className="AboutMe__icons" src={GithubIcon} alt="github" />
        </a>

        <a href="https://www.linkedin.com/in/jimmykt82/">
          <img className="AboutMe__icons" src={LinkedinIcon} alt="Linkedin" />
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
