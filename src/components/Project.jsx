import "./Project.scss";
import GithubIcon from "../assets/Icons/github.png";
import VisitIcon from "../assets/Icons/visit.png";

function Project(props) {
  console.log(props);
  return (
    <div className="Project">
      <h2 className="Project__name">{props.name}</h2>
      <div className="Project__container">
        <div className="Project__image-container">
          <img className="Project__image" src={props.image} alt="image" />
        </div>

        <div className="Project__info-container">
          <p className="Project__info">{props.info}</p>
          <p className="Project__stacks">Stacks Used: {props.stacks}</p>
          <div className="Project__links">
            <a href={props.github} target="_blank">
              <img className="Project__icon" src={GithubIcon} alt="Githun" />
            </a>
            <a href={props.host} target="_blank">
              <img className="Project__icon" src={VisitIcon} alt="Githun" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
