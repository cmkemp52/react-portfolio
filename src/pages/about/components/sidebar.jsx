import React from "react";
import cmk from "../images/cmk.png";
import Styled from "styled-components";

const SidebarDiv = Styled.div`
  display: flex;
  img{
    height: 200px
    width: 180px;
    margin-left: 20px;
    border-radius: 2%;
  }
  @media (min-width: 1050px) {
    flex-direction: column;
    img{
      height:400px;
      width: 340px;
    }
  }
`;
const SkillDiv = Styled.div`
    width: 100%;
    h2{
      text-align: center;
    }
`;

const SkillList = Styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 1.2em;
    text-align: center;
    margin: 0px;
    padding: 0px;
`;

export default function sidebar() {
  return (
    <SidebarDiv>
      <img src={cmk} alt="Christopher Kemp" />
      <SkillDiv>
        <h2>Skills</h2>
        <SkillList>
          <li>Python</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>Node</li>
          <li>SQL</li>
          <li>Express</li>
          <li>HTML5</li>
          <li>React</li>
        </SkillList>
      </SkillDiv>
    </SidebarDiv>
  );
}
