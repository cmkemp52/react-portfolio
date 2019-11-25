import React, { Component } from "react";
import HomeContent from "./homeContent";
import Styled from "styled-components";

const HomeDiv = Styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export class home extends Component {
  render() {
    return (
      <HomeDiv>
        <HomeContent />
      </HomeDiv>
    );
  }
}

export default home;
