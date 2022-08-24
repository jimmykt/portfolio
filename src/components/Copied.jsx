import "./Copied.scss";

import CopyIcon from "../assets/Icons/copy.png";

function Copied() {
  const copyText = () => {
    navigator.clipboard.writeText("jimmykkst@gmail.com");
  };

  return (
    <div className="copy">
      <img
        className="copy__img"
        src={CopyIcon}
        onClick={copyText}
        alt="copy icon"
      />
      <p className={"copy__text"}>copied</p>
    </div>
  );
}

export default Copied;
