import "./Header.scss";
import Toggle from "./Toggle";

function Header() {
  return (
    <header class="top-nav">
      <div>Jimmy Tam</div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
