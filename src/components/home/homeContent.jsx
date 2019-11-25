import React, { Component } from "react";
import Icon from "./icon";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";
import email from "./images/email.svg";
import pdf from "./images/document.svg";

export class homeContent extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default homeContent;
