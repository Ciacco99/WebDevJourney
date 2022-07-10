import logo from "../images/reactjs-icon.svg";
export default function Main() {
  return (
    <nav className="Navbar">
      <img src={logo} className="nav-logo" alt="logo" />
      <h2 className="nav-facts">ReactFacts</h2>
      <h3 className="nav-course">React Course - Project 1</h3>
    </nav>
  );
}
