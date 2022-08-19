import "./Footer.scss";
import GithubIcon from "../assets/Icons/github.png";
import LinkedinIcon from "../assets/Icons/linkedin.png";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__containerOne">
        <p className="Footer__name">Jimmy Tam</p>
        <a className="Footer__email" href="mailto:jimmykkst@gmail.com">
          jimmykkst@gmail.com
        </a>
      </div>

      <div className="Footer__containerTwo">
        <a href="https://github.com/jimmykt">
          <img className="Footer__icons" src={GithubIcon} alt="github" />
        </a>

        <a href="https://www.linkedin.com/in/jimmykt82/">
          <img className="Footer__icons" src={LinkedinIcon} alt="Linkedin" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
