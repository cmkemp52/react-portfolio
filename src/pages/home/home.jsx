import React from "react";
import HomeContent from "./components/homeContent";
import Styled from "styled-components";

const HomeDiv = Styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export default function Home() {
  return (
    <HomeDiv id="home">
      <HomeContent />
    </HomeDiv>
  );
}
