import "./Header.scss";
function Header() {
  return (
    <header className="Header">
      <p>Jimmy Tam</p>
      <ul className="Header__nav">
        <li className="Header__link">Home</li>
        <li className="Header__link">Projects</li>
        <li className="Header__link">Contact</li>
      </ul>
    </header>
  );
}

export default Header;
