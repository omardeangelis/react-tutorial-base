import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { LinkComponent, SocialComponent } from "../utils/links";
const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className="nav">
      <div className="container nav-container">
        <header className="nav-header">
          <Link to="/" className="nav-brand">
            <h3>Drink Team</h3>
          </Link>
          <div className="nav-toggler">
            <button className="icon-btn btn nav-toggler" onClick={openSidebar}>
              <FaBars className="nav-icon" />
            </button>
          </div>
        </header>
        <LinkComponent classLink="nav-links" />
        <SocialComponent classSocial="socialTop" />
      </div>
    </nav>
  );
};

export default Navbar;
