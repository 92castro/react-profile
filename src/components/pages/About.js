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
          I'll start out by saying, thank you. Thank you for taking the time for
          visiting my portfolio that is still under construction. My name is
          Celin Castro, and I was born in The Golden State-California, raised in
          The Great State of Texas, and now I live in Colorful Colorado! I'm
          currently a student at the University of Denver where I'm currently
          attending a coding bootcamp to get ahead in life and find a career.
          The reason I decided to built this page is to introduce myself to the
          world of coding and to showoff my work. There's not much to show, but
          I promise there's more to come!
        </p>
      </div>
      <div id="aBlock" className="container text-white">
        <div className="row d-flex justify-content-around">
          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h3>My Resume</h3>
            <a href="" target="_blank">
              <img src={Resume} className="img-fluid" alt="Resume" />
            </a>
          </div>
          <div className="col-sm-12 col-md-4 lowerBoxes">
            <h3> My GitHub</h3>
            <a href="https://github.com/92castro" target="_blank">
              <img src={Github} id="git" className="img-fluid" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
