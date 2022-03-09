import "./Project.scss";
import GithubIcon from "../assets/Icons/github.png";
import VisitIcon from "../assets/Icons/visit.png";

function Project(props) {
  console.log(props);
  return (
    <div className="Project">
      <p className="Project__name">{props.name}</p>
      <img className="Project__image" src={props.image} alt="image" />
      <p className="Project__info">{props.info}</p>
      <p className="Project__stacks">Stacks Used: {props.stacks}</p>

      <a href={props.github}>
        <img className="Project__icon" src={GithubIcon} alt="Githun" />
      </a>
      <a href={props.host}>
        <img className="Project__icon" src={VisitIcon} alt="Githun" />
      </a>
    </div>
  );
}

export default Project;
