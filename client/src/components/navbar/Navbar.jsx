import Avatar from "../avatar/Avatar";
import Button from "../button/Button";

//image assets
import navbarStackImg from "../../assets/stackNav.svg";
import Search from "../../assets/magnifying-glass-solid.svg";
import { Link } from "react-router-dom";

//css file
import "./Navbar.css";

function Navbar() {
  const User = null;
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-item nav-btn">
          <img
            className="nav-logo"
            src={navbarStackImg}
            alt="logo"
            width="120px"
            height="40px"
          />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search...." />
          <img src={Search} alt="search" className="search-icon" />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Login
          </Link>
        ) : (
          <>
            <Link to="/">
              <Avatar>S</Avatar>
            </Link>
            <Button>Log Out</Button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
