import React, { useEffect } from "react";
import "./header.css";
import { useState } from "react";
function Header() {
  // ============================ HOOKS =====================
  const [showModal, setShowModal] = useState(false);
  // ===================== EVENT HANDLERS=====================
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("mode") === "dark" ? true : false
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    document.body.classList.toggle("light", !isDarkMode);
    if (isDarkMode) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
  }, [isDarkMode]);
  return (
    <header className="flex">
      <button className="menu icon-menu" onClick={handleShowModal} />
      <div />
      <nav>
        <ul className="flex ">
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className={`mode ${isDarkMode ? "icon-night" : "icon-sun"}`}
        onClick={toggleDarkMode}
      />
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button className="icon-close" onClick={handleHideModal} />
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
