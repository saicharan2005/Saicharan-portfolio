import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Charan </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />I am currently a B.Tech Computer Science student at the
            <span className="purple">
              {" "}
              Institute of Aeronautical Engineering (IARE).
            </span>
            <br />I specialize in full-stack development, particularly in the
            <span className="purple"> MERN stack</span>, and have experience
            building e-commerce platforms.
            <br />
            <br />
            Apart from coding, here are some activities I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Exercise and Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build solutions that create impact!"{" "}
          </p>
          <footer className="blockquote-footer">Charan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
