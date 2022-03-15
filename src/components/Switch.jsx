import "./Switch.scss";

function Switch() {
  return (
    <div>
      <label className="switch">
        <input typeof="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Switch;
