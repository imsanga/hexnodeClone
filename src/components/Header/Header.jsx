import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navContainer">
        <div className="logo">
          <a href="https://www.hexnode.com/">hexnode</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`menu ${menuOpen ? "active" : ""}`}>
          <button
            className="trial-btn"
            onClick={() => {
              window.location.href =
                "https://www.hexnode.com/mobile-device-management/cloud/signup/";
            }}
          >
            14 DAY FREE TRIAL
          </button>
          <button
            className="login-btn"
            onClick={() => {
              window.location.href =
                "https://www.hexnode.com/mobile-device-management/sign-in/";
            }}
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
