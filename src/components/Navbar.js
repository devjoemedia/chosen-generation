import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  const toggleNavMenu = () => {
    setShow(!show);
  };
  const removeMenu = () => {
    setShow(false);
  };
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [show]);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link onClick={removeMenu} to="/">
            CGWC
          </Link>
        </div>
        <ul className={show ? "navbar__links active" : "navbar__links"}>
          <li>
            <Link onClick={removeMenu} to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={removeMenu} to="/about" className="navbar__link">
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={removeMenu}
              to="/sermons"
              className="navbar__link"
            >
              Sermons
            </Link>
          </li>
          <li>
            <Link onClick={removeMenu} to="/events" className="navbar__link">
              Events
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleNavMenu}
              to="/prayer-request"
              className="navbar__link"
            >
              Prayer Request
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleNavMenu}
              to="/contacts"
              className="navbar__link"
            >
              Contacts
            </Link>
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
