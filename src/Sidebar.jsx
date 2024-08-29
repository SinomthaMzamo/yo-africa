import React, { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import styles from "./Sidebar.module.css";
import logoImg from "./assets/logo-named.png"

const Sidebar = ({onViewChange}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = (event) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        // Redirect to the login page or homepage
        window.location.href = "/home";
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.toggleButton} onClick={toggleSidebar}>
        <span className="material-symbols-outlined">
          {isCollapsed ? 'menu' : 'close'}
        </span>
      </div>
      <h3 className={styles.sidebarTitle}>
      <img src={logoImg}/>
      Dashboard
      </h3>
      <ul className={styles.sidebarMenu}>
        <li>
          <a href="#" onClick={() => onViewChange("Profile")}>
            <span className="material-symbols-outlined">person</span>
            {!isCollapsed && <span>Profile</span>}
          </a>
        </li>
        <li>
          <a href="/nursery">
            <span className="material-symbols-outlined">park</span>
            {!isCollapsed && <span>Nursery</span>}
          </a>
        </li>
        <li>
          <a href="/another-feature">
            <span className="material-symbols-outlined">layers</span>
            {!isCollapsed && <span>Home Remedies</span>}
          </a>
        </li>
        <li>
          <a href="/settings">
            <span className="material-symbols-outlined">settings</span>
            {!isCollapsed && <span>Settings</span>}
          </a>
        </li>
        <li>
          <a href="/profile">
            <span className="material-symbols-outlined">map</span>
            {!isCollapsed && <span>Locator History</span>}
          </a>
        </li>
        <li>
          <a href="/profile">
            <span className="material-symbols-outlined">group</span>
            {!isCollapsed && <span>Communities</span>}
          </a>
        </li>
        <li>
          <a href="/profile">
            <span className="material-symbols-outlined">share</span>
            {!isCollapsed && <span>Share</span>}
          </a>
        </li>
        <li>
          <a href="/home" onClick={handleLogout}>
            <span className="material-symbols-outlined">logout</span>
            {!isCollapsed && <span>Log Out</span>}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
