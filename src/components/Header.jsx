import { Link } from "react-router";

function Header() {
  return (
    <div className="top-nav">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
    </div>
  );
}

export default Header;
