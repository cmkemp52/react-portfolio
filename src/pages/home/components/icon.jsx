import React from "react";
import Styled from "styled-components";

const Tcon = Styled.img`
    height: 50px;
    margin: 5px;
`;

export default function Icon(props) {
  return (
    <a href={props.link}>
      <Tcon src={props.src} alt={props.alt} />
    </a>
  );
}
