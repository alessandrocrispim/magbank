import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";

import "./Dashboard.scss";

const Dashboard = ({ className = false }) => {
  const data = {
    latestBalance: [
      { date: "22/07", description: "SAQUE 24H 012345", value: "300,00" },
      { date: "21/07", description: "SUPERMERCADO 02323626", value: "275,00" },
      { date: "20/07", description: "NETFLIX 235236", value: "30,00" },
      { date: "22/07", description: "FARMACIA 121512", value: "350,00" },
      { date: "22/07", description: "FARMACIA 121512", value: "350,00" },
    ],
    futureBalance: [
      { date: "22/08", description: "SALARIO  012345", value: "3000,00" },
      { date: "21/08", description: "IMAGINE 02323626", value: "275,00" },
      { date: "20/08", description: "NETFLIX 235236", value: "30,00" },
      { date: "22/08", description: "FARMACIA 121512", value: "350,00" },
    ],
  };

  return (
    <Container className={`dashboard py-5 ${className ? className : ""}`}>
      <Row>
        <Col xs={12} lg={4}>
          <Row className="d-fex align-items-center mb-5">
            <Col xs={3}>
              <span className="dashboard__user-avatar">
                <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
                <FontAwesomeIcon
                  className="dashboard__user-icon"
                  icon={faUser}
                  size="3x"
                  color="#7c7d7d"
                />
              </span>
            </Col>
            <Col xs={9}>
              <h4>Alessandro Alves</h4>
              <p className="text-muted">ag: 1234 c/c: 4321-5</p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-start">
            <Link to="/dashboard">
              <Button
                className="dashboard__button dashboard__button--active"
                variant="link"
                size="lg"
              >
                Minha Conta
              </Button>
            </Link>
            <Link to="/dashboard/payment">
              <Button className="dashboard__button " variant="link" size="lg">
                Pagamentos
              </Button>
            </Link>
            <Link to="/dashboard/history">
              <Button className="dashboard__button " variant="link" size="lg">
                Extrato
              </Button>
            </Link>
          </Row>
        </Col>
        <Routes>
          <Route path="/dashboard/history" element={<h2>extratos</h2>} />
          <Route path="/dashboard/payments" element={<h2>pagamentos</h2>} />
          <Route path="/dashboard" element={<AccountBalance data={data} />} />
        </Routes>
      </Row>
    </Container>
  );
};

export default Dashboard;
