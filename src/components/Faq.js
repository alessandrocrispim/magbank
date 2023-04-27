import React, {useState} from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import IconText from "./IconText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faWallet,
  faCreditCard,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Faq.scss";


const Faq = () => {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!"),
    );

    return (
      <button
        type="button"
        style={{
          backgroundColor: "none",
          color: "red",
          border: "none",
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  const options = [
    { icon: faCreditCard, text: "Cartão de crédito" },
    { icon: faWallet, text: "Conta e abertura" },
    { icon: faShieldAlt, text: "Token digital" },
    { icon: faUserTie, text: "Produtos e serviços" },
  ];

  const [index, setIndex] = useState(0);
  const handleClick = key => {
    setIndex(key)
  }

  return (
    <div className="faq text-light">
      <Container className=" py-4  py-md-5 ">
        <Row className="d-flex justify-content-center mb-5">
          <h2 className="faq-title my-5">Dúvidas frequentes</h2>
        </Row>
        <Row className=" align-items-start justify-content-center">
          <Col className="d-md-none mb-4" xs={12}>
            <Row>
              {options.map(({ icon }, key) => (
                <Col className="d-flex justify-content-center " key={key}>
                  <FontAwesomeIcon
                    icon={icon}
                    color={key === index ? "#fff" : "#bbb"}
                    size="2x"
                    onClick={() => handleClick(key)}
                  />
                </Col>
              ))}
            </Row>
            <Row>
              <p className=" lead d-flex justify-content-center align-items-center mt-5">
                {options[index].text}
              </p>
            </Row>
          </Col>

          <Col className="d-none d-md-flex flex-column gap-4 ">
            {options.map(({ icon, text }, key) => (
              <IconText
                icon={icon}
                color={key === index ? "#fff" : "#bbb"}
                size={3}
                textClassname="mt-2 lead text-light faq-clickable"
                className="faq-clickable"
                onClick={() => handleClick(key)}
                key={key}
              >
                {text}
              </IconText>
            ))}
          </Col>
          <Col>
            <Accordion defaultActiveKey="0" activeKey={`${index}`}>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="0">
                    <p className="lead text-light">
                      Lorem ipsum dolor sit amet
                    </p>
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="1">
                    <p className="lead text-light">
                      Nulla porttitor eros ac ex tristique posuere
                    </p>
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="2">
                    <p className="lead text-light">
                      Quisque fringilla tincidunt arcu
                    </p>
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="3">
                    <p className="lead text-light">
                      Nam elementum lobortis purus a maximus tortor
                    </p>
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
