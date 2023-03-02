import React, {useState} from "react";
import {Link} from "react-router-dom";
import { HeaderStyles } from "./header.styles";

function Logo() {
  return (
    <img src="" alt="evil corp logo"/>
  )
}

export function Header() {
  const [display, toggleOpen] = useState("none");
  
  function onButtonClick() {
    toggleOpen(display === "flex" ? "none": "flex")
  }

  return (
    <HeaderStyles display={display}>
      <nav>
        <Logo />
        <span onClick={() => onButtonClick()}>
          <img src="" alt="Menu Icon" />
        </span>
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart Icon Magic!</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
}