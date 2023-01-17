import React from "react";
import "../Styles/project.css";
import Webaboos from "../pictures/webaboos.PNG";
import Quiz from "../pictures/quizhw.PNG";
import Hogwarts from "../pictures/hogwartsdb.PNG";
import Weather from "../pictures/weatherdash.PNG";
import Password from "../pictures/password.PNG";
import Planner from "../pictures/planner.PNG";

export default function Projects() {
  return (
    <div>
      <div class="flyinTxtCont">
        <h1 class="flyIn lineOne">Celin Castro</h1>
      </div>
      <div id="block" class="container">
        <div class="row">
          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h3> Web-Aboos</h3>
            <a href="https://jerimiahk.github.io/WEBaboos/" target="_blank">
              <img src={Webaboos} className="img-fluid" alt="Project 1" />
            </a>
            <a
              className="nav-item"
              class="d-flex justify-content-end"
              href="https://github.com/JerimiahK/WEBaboos"
              target="_blank"
            >
              {" "}
              (Repo)
            </a>{" "}
            <br></br>
            My first project
          </div>

          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h3> Hogwarts Enrollment</h3>
            <a href="https://lit-castle-55469.herokuapp.com/" target="_blank">
              <img src={Hogwarts} className="img-fluid" alt="project 2" />
            </a>
            <a
              className="nav-item"
              href="https://github.com/MandieBot/Sorting-Hat"
              target="_blank"
            >
              (Repo)
            </a>{" "}
            <br></br>
            project 2
          </div>

          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h3>SpongeBob Quiz</h3>
            <a
              href="https://92castro.github.io/challenge-quiz/"
              target="_blank"
            >
              <img src={Quiz} className="img-fluid" alt="quiz" />
            </a>
            <a
              className="nav-item"
              href="https://github.com/92castro/challenge-quiz"
              target="_blank"
            >
              (Repo)
            </a>
            <br></br>
            quiz info
          </div>
          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h3>Weather Dash-Board</h3>
            <a
              href="https://92castro.github.io/weather-dashboard/"
              target="_blank"
            >
              <img
                src={Weather}
                className="img-fluid"
                alt="weather dashboard"
              />
            </a>
            <a
              className="nav-item"
              href="https://github.com/92castro/weather-dashboard"
              target="_blank"
            >
              (Repo)
            </a>{" "}
            <br></br>
            weather info
          </div>
          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h3>Work Panner</h3>
            <a
              href="https://92castro.github.io/work-day-scheduler-/"
              target="_blank"
            >
              <img src={Planner} className="img-fluid" alt="Planner" />
            </a>
            <a
              className="nav-item"
              href="https://github.com/92castro/work-day-scheduler-"
              target="_blank"
            >
              (Repo)
            </a>
            <br></br>
            planner info
          </div>
          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h3>Password Generator</h3>
            <a href="https://92castro.github.io/Password-Generator/">
              <img src={Password} className="img-fluid" alt="password" />
            </a>
            <a
              className="nav-item"
              href="https://github.com/92castro/Password-Generator"
              target="_blank"
            >
              (Repo)
            </a>{" "}
            <br></br>
            password info
          </div>
        </div>
      </div>
    </div>
  );
}
