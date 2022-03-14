import "./Header.scss";
import Toggle from "./Toggle";

function Header() {
  return (
    <header className="Header">
      <h1 className="Header__name">Jimmy Tam</h1>
      <Toggle />
    </header>
  );
}

export default Header;
