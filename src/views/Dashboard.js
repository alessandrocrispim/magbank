import React from "react";
import { Container, Row, Col, Button, Tabs, Tab, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.scss";

const Dashboard = ( {className = false}) => {
  const data = [
    { date: "22/07", description: "SAQUE 24H 012345", value: "300,00" },
    { date: "21/07", description: "SUPERMERCADO 02323626", value: "275,00" },
    { date: "20/07", description: "NETFLIX 235236", value: "30,00" },
    { date: "22/07", description: "FARMACIA 121512", value: "350,00" },
    { date: "22/07", description: "FARMACIA 121512", value: "350,00" },
  ];

  const future = [
    { date: "22/08", description: "SALARIO  012345", value: "3000,00" },
    { date: "21/08", description: "IMAGINE 02323626", value: "275,00" },
    { date: "20/08", description: "NETFLIX 235236", value: "30,00" },
    { date: "22/08", description: "FARMACIA 121512", value: "350,00" },
  ];

  return (
    <Container className={`dashboard py-5 ${className ? className : '' }`}>
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
            <Button
              className="dashboard__button dashboard__button--active"
              variant="link"
              size="lg"
            >
              Minha Conta
            </Button>

            <Button className="dashboard__button " variant="link" size="lg">
              Pagamentos
            </Button>

            <Button className="dashboard__button " variant="link" size="lg">
              Extrato
            </Button>
          </Row>
        </Col>
        <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4 ps-5">
          <h3 className="my-5 ">Conta corrente</h3>
          <h6>
            <small>
              <strong>Saldo em conta corrente</strong>
            </small>
          </h6>
          <h4 className="text-success mb-4">
            <small>R$</small>3.500<small>,00</small>
          </h4>
          <h6>
            <small>
              <strong>Cheque especial</strong>
            </small>
          </h6>
          <p className="mb-0">Limite disponivel</p>
          <p className="mb-4">R$ 5.000,00</p>
          <Button variant="secondary">Ver extrato</Button>
        </Col>
        <Col xs={12} lg={5} className="mt-lg-5 pt-lg-5">
          <Tabs className=" mt-5 pt-lg-5" defaultActiveKey="latest">
            <Tab eventKey="latest" title="Últimos Lançamentos">
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(({ date, description, value }) => (
                    <tr key={description}>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="future" title="Lançamentos Futuros">
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {future.map(({ date, description, value }) => (
                    <tr key={description}>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
