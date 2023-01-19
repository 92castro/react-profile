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
            <h6 class="mt-2">
              My first team project was a fun application using third-party-APIs
              to display a picture and random quote plus a wiki page of the
              anime the user searches
              <br></br>
              <a
                className="text-warning"
                href="https://github.com/JerimiahK/WEBaboos"
                target="_blank"
              >
                (GitHub Link)
              </a>
            </h6>
          </div>

          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h3> Hogwarts Enrollment</h3>
            <a href="https://lit-castle-55469.herokuapp.com/" target="_blank">
              <img src={Hogwarts} className="img-fluid" alt="project 2" />
            </a>
            <h6 class="mt-2">
              In my second team project we built a database and routes for users
              to sign up and register to join the school of wizards
              <br></br>
              <a
                className="text-warning"
                href="https://github.com/MandieBot/Sorting-Hat"
                target="_blank"
              >
                (GitHub Link)
              </a>
            </h6>
          </div>

          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h3>SpongeBob Quiz</h3>
            <a
              href="https://92castro.github.io/challenge-quiz/"
              target="_blank"
            >
              <img src={Quiz} className="img-fluid" alt="quiz" />
            </a>

            <h6 class="mt-2">
              I built a quiz application to test my JavaScript skills where a
              timer begins when the user clicks "Start" and if you get a wrong
              answer, seconds are deducted from the timer
              <br></br>
              <a
                className="text-warning"
                href="https://github.com/92castro/challenge-quiz"
                target="_blank"
              >
                (GitHub Link)
              </a>
            </h6>
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

            <h6 class="mt-2">
              I built this weather dashboard app using a Weather API where a
              user can look up any city and will be presented with the city's
              current forecast plus the next 5 day forecast
              <br></br>
              <a
                className="text-warning"
                href="https://github.com/92castro/weather-dashboard"
                target="_blank"
              >
                (GitHub Link)
              </a>
            </h6>
          </div>
          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h3>Work Panner</h3>
            <a
              href="https://92castro.github.io/work-day-scheduler-/"
              target="_blank"
            >
              <img src={Planner} className="img-fluid" alt="Planner" />
            </a>
            <h6 class="mt-2">
              Do you have a busy work schedule? Here I have a helpful work-day
              planner I built where a user can plan their work day by typing in
              their task to the appropriate time slot. I also built a local
              storage to save each task
              <br></br>
              <a
                className="text-warning"
                href="https://github.com/92castro/work-day-scheduler-"
                target="_blank"
              >
                (GitHub Link)
              </a>
            </h6>
          </div>
          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h3>Password Generator</h3>
            <a
              href="https://92castro.github.io/Password-Generator/"
              target="_blank"
            >
              <img src={Password} className="img-fluid" alt="password" />
            </a>
            <h6 class="mt-2">
              This password generator app can create a random password between
              8-128 characters and the user can select from upper or lower case
              letters, numbers, or special characters
              <br></br>
              <a
                className="text-warning"
                href="https://github.com/92castro/Password-Generator"
                target="_blank"
              >
                (GitHub Link)
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
