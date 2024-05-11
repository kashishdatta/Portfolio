import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Yellow_Bright_Woman_Avatar-2-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  //AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              STEP INTO MY <span className='purple'>WORLD</span>
            </h1>
            <p className="home-about-body">
            I'm a data sorcerer conjuring inventive solutions by unraveling the mysteries of complex data. With a Bachelor's in Information Technology and a minor in Data Science, I've cultivated a mastery of 
            <i>
                <b className="purple"> Python, Machine Learning, Cloud Computing</b>
            </i> and 
            <i>
                <b className="purple"> Data Visualization</b>
            </i>, honed through diverse experiences like architecting optimization frameworks for EV charging infrastructure at 
            <i>
                <b className="purple"> Indian Space Research Organisation (ISRO)</b>
            </i> and conducting data-driven analyses as a 
            <i>
                <b className="purple"> Business Analyst Intern.</b>
            </i> 
            <br />
            <br />
            Armed with a unique blend of technical prowess, problem-solving finesse, and a fervent drive for innovation, I'm poised to shape the landscape of data-driven solutions. 
            
            <br />
            <br />
            <i>
                <b className="purple"> Welcome to the realm where I, Kashish Datta, wield the power of transformative insights.</b>
            </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kashishdatta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kashishdatta01@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kashish-datta-b5a6801a8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kaasshhiisshh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
