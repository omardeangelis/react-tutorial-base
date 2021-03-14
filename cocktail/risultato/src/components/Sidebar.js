import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useGlobalContext } from "../context";
const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <header className="nav-header container">
        <div className="nav-brand">
          <h3>DRINK TEAM</h3>
        </div>
        <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
          <VscArrowSmallLeft className="nav-icon" />
        </button>
      </header>
      <div className="container">
        <LinkComponent classLink="sidebar-links" />
      </div>
      <SocialComponent classSocial="sidebar-social" />
    </aside>
  );
};

export default Sidebar;
