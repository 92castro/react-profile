import React from "react";
import "./Styles/footer.css";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer id="footer">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://www.linkedin.com/in/celin-castro-055941164/"
            target="_blank"
          >
            {" "}
            <BsLinkedin />{" "}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="mailto:celin92castro@gmail.com">
            <AiOutlineMail />
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://github.com/92castro"
            target="_blank"
          >
            <BsGithub />
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href=""
            download="Resume"
            target="_blank"
            rel="noreferrer"
          >
            <FiDownload />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
