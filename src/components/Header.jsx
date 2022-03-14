import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <p className="Header__name">Jimmy Tam</p>

      <span></span>
      <span></span>
      <span></span>

      <ul className="Header__list">
        <li className="Header__item">
          <a href="#hero">Home</a>
        </li>
        <li className="Header__item">
          <a href="#projects">Projects</a>
        </li>
        <li className="Header__item">Contact</li>
      </ul>
    </header>
  );
}

export default Header;
