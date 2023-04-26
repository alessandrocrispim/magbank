import React from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navigation.scss";
import logo from "../assets/logo.svg"

function Navigation({handleCreatAcc}) {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to='/'>
            <img
              src={logo}
              height="30"
              className="d-inline-block align-top"
              alt="MagBank logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#cartao">Cartão</Nav.Link>
            <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>

          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-light">
              <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to='/login'>Pessoa Física</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  <Link tp='/login'>Pessoa Jurídica</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Button>
            <Button variant="outline-light" onClick={handleCreatAcc}>
              Abra sua conta
            </Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
