import React from "react";
import { useSpring, animated } from "react-spring";
import Icon from "./icon";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import email from "../images/email.svg";
import pdf from "../images/document.svg";

function HomeContent() {
  const slideIn = useSpring({
    margin: "50px",
    opacity: 1,
    from: { opacity: 0, margin: "-300px" },
    duration: 5000,
    delay: 500
  });
  return (
    <animated.div style={slideIn}>
      <h1>Christopher Kemp</h1>
      <h3>Web Developer</h3>
      <div id="startIcons">
        <Icon
          src={github}
          alt="Github link"
          link="https://github.com/cmkemp52"
        />
        <Icon
          src={linkedin}
          alt="Linkedin link"
          link="https://www.linkedin.com/in/cmkemp52/"
        />
        <Icon src={email} alt="Email link" link="mailto:cmkemp52@gmail.com" />
        <Icon
          src={pdf}
          alt="Resume link"
          link="files/ChristopherKempResume.pdf"
        />
      </div>
    </animated.div>
  );
}

export default HomeContent;
