import React from "react";
import "../Styles/resume.css";
import myResume from "../pictures/resume.PNG";
import Github from "../pictures/github.png";

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
          HTML/CSS
          <div>
            <div>
              <div class="skills html " style={{ height: "30px" }}>
                95%
              </div>
            </div>
            JavaScript/jQuery
            <div>
              <div class="skills js" style={{ height: "30px" }}>
                90%
              </div>
            </div>
            React
            <div>
              <div class="skills react" style={{ height: "30px" }}>
                80%
              </div>
            </div>
            MongoDB/MySQL
            <div>
              <div class="skills mongo" style={{ height: "30px" }}>
                75%
              </div>
            </div>
            Handlebars
            <div>
              <div class="skills handle" style={{ height: "30px" }}>
                65%
              </div>
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
