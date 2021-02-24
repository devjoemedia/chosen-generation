import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  const toggleNavMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }else {
      document.body.style.overflow = "scroll";
      
    }
  }, [show]);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/">CGWC</a>
        </div>
        <ul className={show ? "navbar__links active" : "navbar__links"}>
          <li>
            <a href="/" className="navbar__link">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="navbar__link">
              About
            </a>
          </li>
          <li>
            <a href="/sermons" className="navbar__link">
              Sermons
            </a>
          </li>
          <li>
            <a href="/events" className="navbar__link">
              Events
            </a>
          </li>
          <li>
            <a href="/prayer-request" className="navbar__link">
              Prayer Request
            </a>
          </li>
          <li>
            <a href="/contacts" className="navbar__link">
              Contacts
            </a>
          </li>
          <button className="btn btn-primary">Donate</button>
        </ul>
        <div className="menu-icon">
          <i
            className={show ? "fas fa-times" : "fas fa-bars"}
            onClick={toggleNavMenu}
          ></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
