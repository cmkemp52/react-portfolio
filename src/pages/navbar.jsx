import React from "react";
import Styled from "styled-components";

const NavContainer = Styled.div`
  position: fixed;
  width: 100%;
  z-index: 99;
`;

const Nav = Styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: #071930;
  border-bottom: 1px white solid;
`;

const NavLink = Styled.a`
  text-decoration: none;
  font-size: 1.2em
  color: white;
  padding: 1%;
  padding-right: 2%;
`;

export default function navbar() {
  return (
    <NavContainer>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
      </Nav>
    </NavContainer>
  );
}
