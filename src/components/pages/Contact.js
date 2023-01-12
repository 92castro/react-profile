import React, { useState } from "react";
import validator from "validator";

export default function Contact() {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email");
    } else {
      setEmailError("Not a valid email");
    }
  };
  return (
    <form id="contact">
      <div className="contact-form">
        <label for="name">Name</label>
        <input type="text" className="form-control" placeholder="your name" />
      </div>
      <div className="form-group">
        <label for="email">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="email@example.com"
          onChange={(e) => validateEmail(e)}
        ></input>{" "}
        <br />
        <span
          style={{
            color: "green",
          }}
        >
          {emailError}
        </span>
      </div>

      <div className="form-group">
        <label for="message">Message</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="your message"
          rows="3"
        ></textarea>
      </div>
      <button id="submitBtn" type="submit">
        Submit
      </button>
    </form>
  );
}
