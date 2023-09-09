import "../App.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaWrench, FaGitAlt, FaPython } from "react-icons/fa";

export const Portfolio = () => {
  return (
    <div className="secondary-text">
      <Row>
        <Col>
          <div className="section-border secondary-text">
            <h6>
              <b>Spring Boot & React Template</b>
            </h6>
            <p>
              Spring Boot application template that uses React.js for the front
              end with example components and rest API's
            </p>
            <span>
              <FaWrench />
              Java • Spring Boot • React.js
            </span>
            <br />
            <span>
              <FaGitAlt />
              <a
                style={{ color: "#5B8FB9" }}
                href="https://github.com/eamonduffy/SpringBoot-React-Default"
              >
                eamonduffy/SpringBoot-React-Default
              </a>
            </span>
          </div>
        </Col>
        <Col>
          <div className="section-border">
            <h6>
              <b>Desktop Pet</b>
            </h6>
            <p>
              A virtual companion which accompanies you by walking, sleeping,
              and being cute along your desktop taskbar.
            </p>
            <span>
              <FaWrench />
              Python
            </span>
            <br />
            <span>
              <FaGitAlt />
              <a
                style={{ color: "#5B8FB9" }}
                href="https://github.com/eamonduffy/Desktop-Pet"
              >
                eamonduffy/Desktop-Pet
              </a>
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="section-border">
            <h6>
              <b>Game of the Week</b>
            </h6>
            <p>Description goes here</p>
            <span>
              <FaWrench />
              React.js
            </span>
            <br />
            <span>
              <FaGitAlt />
              <a
                style={{ color: "#5B8FB9" }}
                href="https://github.com/eamonduffy/Desktop-Pet"
              >
                eamonduffy/Desktop-Pet
              </a>
            </span>
          </div>
        </Col>
        <Col>
          <div className="section-border">
            <h6>
              <b>Desktop Pet</b>
            </h6>
            <p>
              A virtual companion which accompanies you by walking along your
              taskbar.
            </p>
            <span>
              <FaWrench />
              Python
            </span>
            <br />
            <span>
              <FaGitAlt />
              <a
                style={{ color: "#5B8FB9" }}
                href="https://github.com/eamonduffy/Desktop-Pet"
              >
                eamonduffy/Desktop-Pet
              </a>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};
