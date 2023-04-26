import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../assets/MAGbank.png'
import applestore from "../assets/applestore.png";
import googlestore from "../assets/googleplaystore.png";
import { faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss'


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center py-5">
          <Col xs={12} lg={6} className="text-lg-start">
            <Image src={logo} />
          </Col>
          <Col xs={12} lg={4}>
            <Image src={applestore} />
            <Image src={googlestore} className="ms-3 my-3 my-lg-0" />
          </Col>
          <Col
            xs={12}
            lg={2}
            className="d-flex align-items-center justify-content-center gap-3"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              color="#7c7c7c"
              size="2x"
            />
            <FontAwesomeIcon icon={faTwitter} color="#7c7c7c" size="2x" />
            <FontAwesomeIcon icon={faYoutube} color="#7c7c7c" size="2x" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer