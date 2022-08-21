import "./ContactPage.scss";
import GithubIcon from "../assets/Icons/github.png";
import LinkedinIcon from "../assets/Icons/linkedin.png";
import CopyIcon from "../assets/Icons/copy.png";

function ContactPage() {
  const copyText = () => {
    navigator.clipboard.writeText("jimmykkst@gmail.com");
  };

  return (
    <div className="ContactPage">
      <div className="ContactPage__containerOne">
        <h1>Got a problem to solve?</h1>
        <p className="ContactPage__name">Jimmy Tam</p>
        <a className="ContactPage__email" href="mailto:jimmykkst@gmail.com">
          jimmykkst@gmail.com
        </a>
        <img
          className="ContactPage__copy"
          src={CopyIcon}
          onClick={copyText}
          alt="copy icon"
        />
      </div>

      <div className="ContactPage__containerTwo">
        <a href="https://github.com/jimmykt">
          <img className="ContactPage__icons" src={GithubIcon} alt="github" />
        </a>

        <a href="https://www.linkedin.com/in/jimmykt82/">
          <img
            className="ContactPage__icons"
            src={LinkedinIcon}
            alt="Linkedin"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactPage;

{
  /* <form className="ContactPage__form" action="">
        <input
          className="input ContactPage__name"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          className="input ContactPage__email"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <input
          className="input ContactPage__subject"
          type="subject"
          name="subject"
          id="subject"
          placeholder="subject"
        />

        <textarea className="input ContactPage__messageBody"></textarea>
        <button className="ContactPage__sendButton">Send</button>
      </form> */
}
