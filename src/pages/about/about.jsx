import React from "react";
import Styled from "styled-components";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

const AboutDiv = Styled.div`
min-height: 100vh;
padding-top: 10%;
@media (min-width: 1050px) {
  display: grid; 
  grid-template-columns: 400px 1fr;
}
`;

export default function about() {
  return (
    <AboutDiv id="about">
      <Sidebar />
      <Main />
    </AboutDiv>
  );
}
