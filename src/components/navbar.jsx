import React, { Component } from "react";

export class navbar extends Component {
  render() {
    return (
      <nav>
        <a href="#start" id="navLink">
          Home
        </a>
        <a href="#about" id="navLink">
          About
        </a>
        <a href="#projects" id="navLink">
          Projects
        </a>
      </nav>
    );
  }
}

export default navbar;
