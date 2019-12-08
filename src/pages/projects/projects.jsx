import React from "react";
import Styled from "styled-components";
import Card from "./components/projectCard";
import bustalkerImage from "./images/bustalker.png";
import Bustalker from "./components/bustalker";
import vitalogImage from "./images/myvitalog.png";
import Myvitalog from "./components/myvitalog";

const ProjectsDiv = Styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 5%;
  text-align: center;
`;
const ProjectCards = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1050px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export default function projects() {
  return (
    <ProjectsDiv id="projects">
      <h2>Projects</h2>
      <h3>Click for more info!</h3>
      <ProjectCards>
        <Card imgSrc={bustalkerImage}>
          <Bustalker />
        </Card>
        <Card imgSrc={vitalogImage}>
          <Myvitalog />
        </Card>
      </ProjectCards>
    </ProjectsDiv>
  );
}
