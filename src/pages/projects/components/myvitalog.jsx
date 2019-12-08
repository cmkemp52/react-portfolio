import React from "react";
import Styled from "styled-components";

const InfoDiv = Styled.div`
    font-size: 0.65em;
    height: 100%;
    width: 100%;
    border-radius: 4%;
    background-size: cover;
    background-color: rgb(1, 53, 1);
    h2{
        margin: 0;    
        padding: 2%;
    }
    @media (min-width: 550px) {
      font-size: 0.9em;
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

export default function Myvitalog() {
  return (
    <InfoDiv>
      <h2>MyVitaLog</h2>
      <nav>
        <Link
          href="https://github.com/cmkemp52/MyVitaLog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </Link>
        <Link
          href="https://www.myvitalog.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </Link>
      </nav>
      <div>
        <div>
          <p>
            MyVitaLog is a daily diet tracker that includes robust information
            about healthy eating.
          </p>
          <p>
            This was a team full-stack Javascript project that was created in 3
            days.
          </p>
          <p>
            My role in this project was creating the backend using Nodejs and
            the database using Postgres.
          </p>
          <p>Technologies used:</p>
          <ul>
            <li>Uses USDA's food APIs to pull nutritional data</li>
            <li>Uses relational databases to log food entries</li>
            <li>Uses Express Node.js framework</li>
          </ul>
        </div>
      </div>
    </InfoDiv>
  );
}
