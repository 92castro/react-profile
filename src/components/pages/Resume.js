import React from "react";
import "../Styles/resume.css";
import myResume from "../pictures/resume.PNG";
import Github from "../pictures/github.png";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiMongodb,
  SiJavascript,
  SiNodedotjs,
  SiHeroku,
  SiMysql,
  SiBootstrap,
  SiJquery,
  SiVisualstudiocode,
  SiNpm,
  SiGraphql,
  SiHandlebarsdotjs,
  SiInsomnia,
} from "react-icons/si";

export default function Resume() {
  return (
    <div>
      <div class="flyinTxtCont">
        <h1 class="flyIn lineOne">Celin Castro</h1>
      </div>
      <div id="boxS">
        <div id="skills">
          <h2 className="text-center">SKILLS</h2>
          <br></br>
          <div className="d-flex justify-content-evenly">
            <div>
              <SiHtml5 size={45} />
            </div>
            <div>
              <SiCss3 size={45} />
            </div>
            <div>
              <SiJavascript size={45} />
            </div>
            <div>
              <SiReact size={45} />
            </div>
            <div>
              <SiNodedotjs size={45} />
            </div>
            <div>
              <SiNpm size={45} />
            </div>
          </div>
          <br></br>
          <h2 className="text-center">APPLICATIONS</h2>
          <br></br>
          <div className="d-flex justify-content-evenly">
            <div>
              <SiHeroku size={45} />
            </div>
            <div>
              <SiVisualstudiocode size={45} />
            </div>
            <div>
              <SiMongodb size={45} />
            </div>
            <div>
              <SiGraphql size={45} />
            </div>
            <div>
              <SiMysql size={45} />
            </div>
            <div>
              <SiInsomnia size={45} />
            </div>
          </div>
        </div>
      </div>
      <div id="aBlock" className="container text-white mt-5">
        <div className="row d-flex justify-content-around">
          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h2>My Resume</h2>
            <a
              href="https://docs.google.com/document/d/1YdiGo81dLMefY1WsZJhUc2LYpoOJhBg7nE_qNPm-Jg8/export?format=pdf"
              download="myResume"
              target="_blank"
            >
              <img src={myResume} className="img-fluid" alt="Resume" />
            </a>
          </div>
          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h2> My GitHub</h2>
            <a href="https://github.com/92castro" target="_blank">
              <img src={Github} id="git" className="img-fluid" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
