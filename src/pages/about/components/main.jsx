import React from "react";
import Styled from "styled-components";

const ContentDiv = Styled.div`
    padding: 2%;
`;

export default function main() {
  return (
    <ContentDiv>
      <h3>Hi, I'm Christopher</h3>
      <p>
        I went to Sheridan College in Canada for Computer Systems Analysis. I
        learned a lot of the concepts behind programming, networking, and
        databases, but never truly learned how to build something. Afterwards, I
        came to Atlanta and got a job as an application support analyst at
        Piksel. I handled client support and QA for our products. During my 3
        years at Piksel, I was promoted to team lead and managed a team of 12
        people. I wanted to pursue a more challenging career and enrolled in
        DigitalCrafts, where I learned full stack Javascript development.
      </p>
      <p>
        In my free time, I volunteer with Big Brothers Big Sisters. I've been
        blessed with a wonderful wife and we share our home with guinea pigs and
        cats.
      </p>
    </ContentDiv>
  );
}
