import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <p>Jimmy Tam</p>
      <ul className="Header__nav">
        <li className="Header__link">
          <a href="#hero">Home</a>
        </li>
        <li className="Header__link">
          <a href="#projects">Projects</a>
        </li>
        <li className="Header__link">Contact</li>
      </ul>
    </header>
  );
}

export default Header;
