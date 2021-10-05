import React, { useState, useEffect } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <h1 className="nav_title">Movie Maina</h1>

      <FontAwesomeIcon
        className="nav_icon"
        icon={faBars}
        size="lg"
        style={{ color: "white" }}
      />
    </div>
  );
};

export default Nav;
