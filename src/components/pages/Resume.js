import React from "react";
import "../Styles/resume.css";

export default function Resume() {
  return (
    <div>
      <div class="flyinTxtCont">
        <h1 class="flyIn lineOne">Celin Castro</h1>
      </div>
      <div id="boxS">
        <p id="resume">hello</p>
        <div id="skills">
          <h2>SKILLS</h2>
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
    </div>
  );
}
