import React from "react";
import "../Styles/about.css";
import Profilepic from "../pictures/me.jpg";
import Resume from "../pictures/resume.PNG";
import Github from "../pictures/github.png";

export default function About() {
  return (
    <div>
      <div class="flyinTxtCont">
        <h1 class="flyIn lineOne">Celin Castro</h1>
      </div>
      {/* <h1>Celin Castro</h1> */}
      <div id="main">
        <img class="profilepic" src={Profilepic} alt="profile pic" />
        <p>
          Hi there! I'll start out by saying, thank you. Thank you for taking
          the time to visit my portfolio. My name is Celin Castro, and I was
          born in The Golden State-California, raised in The Great State of
          Texas, and now I live in Colorful Colorado! I recently graduated from
          the University of Denver with a Certificate in Full Stack Development
          and I'm eager to bring my skills and passion to the industry. In
          addition to my technical skills, I have strong problem-solving and
          communication abilities, which I honed through various team projects
          during my studies. I am a quick learner and able to work well under
          pressure. I believe my technical skills, combined with my positive
          attitude, and eagerness to learn, will make me a valuable addition to
          any development team. I look forward to using my skills and experience
          to help organizations build innovative and user-friendly websites and
          technologies.
        </p>
      </div>
    </div>
  );
}
