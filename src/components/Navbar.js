import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="logo">
          CGWC
        </a>
        <ul className="navbar__links">
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
        </ul>
        <button className="btn btn-primary">Donate</button>
      </nav>
    </header>
  );
}

export default Navbar;
