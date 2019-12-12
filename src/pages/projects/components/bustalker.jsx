import React from "react";
import Styled from "styled-components";

const InfoDiv = Styled.div`
  font-size: 0.65em;
  height: 100%;
  width: 100%;
  border-radius: 4%;
  background-size: cover;
  background-color: rgb(140, 65, 0);
  h2{
    margin: 0;    
    padding: 2%;
  }
  @media (min-width: 550px) {
    font-size: 20px;
  }
`;
const Link = Styled.a`
  text-decoration: none;
  color: white;
  border: 2px white solid;
  border-radius: 10%;
  margin: 1%;
  padding: 1%;
`;

export default function Bustalker() {
  return (
    <InfoDiv>
      <h2>Bus Talker</h2>
      <nav>
        <Link href="https://github.com/cmkemp52/BusTalker" target="_blank">
          Github Repo
        </Link>
        <Link href="https://www.bustalker.com" target="_blank">
          Live Site
        </Link>
      </nav>
      <div>
        <div>
          <p>
            Bus Talker is a website that shows you live information about
            MARTA's system.
          </p>
          <p>
            This was an early team project to create a front end product that
            used external APIs.
          </p>
          <p>
            My role in this project was to bring together MARTA's bus API,
            Leafletjs, and Canvasjs to build the bus tracking section. I also
            handled some of the styling.
          </p>
          <p>Technologies used:</p>
          <ul>
            <li>Uses MARTA's APIs to pull live bus and train data</li>
            <li>Incorporates Leafletjs and Canvasjs</li>
            <li>Styled using Bootstrap and CSS</li>
          </ul>
        </div>
      </div>
    </InfoDiv>
  );
}
