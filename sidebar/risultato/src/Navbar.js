import React from "react";
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "./links";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className="nav">
      <header className="nav-header">
        <div className="nav-brand">
          <h4>Navbar</h4>
        </div>
        <button className="btn nav-toggler" onClick={openSidebar}>
          <FaBars className="nav-icon" />
        </button>
      </header>
      <div className="links-container">
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="social-links">
        <SocialBar />
      </div>
    </nav>
  );
};

export default Navbar;
