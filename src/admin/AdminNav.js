import React, { useEffect, useState } from "react";
import './AdminNav.css';

function AdminNav() {
  const [show, setShow] = useState(false);

  const toggleNavMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [show]);
  return (
    <div className="adminNav">
      <div className="logo-ctn">
        <a href="/admin" className="logo">
          CGWC
        </a>
      </div>
      <div className="menuIcon">
        <i
          className="fas fa-bars"
          onClick={toggleNavMenu}
        ></i>
      </div>
    </div>
  );
}

export default AdminNav;
