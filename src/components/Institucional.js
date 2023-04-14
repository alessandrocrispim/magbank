import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import IconText from './IconText';
import "./Institucional.scss";
import {  faGlobe, faMobile, faMobileAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const Institucional = () => {
  return (
    <section className="institutional text-light py-5">
      <Container>
        <Row>
          <Col xs={12} lg={5} />
          <Col xs={12} lg={7}>
            <h2 className="institutional-title my-5">Já nascemos digital</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              dolorum autem laboriosam asperiores necessitatibus dicta quos sed
              tenetur perferendis facilis. Laudantium saepe eveniet nam eaque,
              reprehenderit suscipit fugit eum atque? Excepturi dolorum autem
              laboriosam asperiores necessitatibus dicta quos sed tenetur
              perferendis facilis. Laudantium saepe eveniet nam eaque,
              reprehenderit suscipit fugit eum atque?
            </p>

            <IconText icon={faMobileAlt}  color="#fff" textClassName="mb-3 ">
              Sem fila e sem burocracia
            </IconText>
            <IconText icon={faMobile} color="#fff" textClassName="mb-3">
              Simples e prático
            </IconText>
            <IconText icon={faGlobe} color="#fff" textClassName="mb-3">
              Abertura de conta 100% online
            </IconText>
            <IconText icon={faShieldAlt} color="#fff" textClassName="mb-3">
              Transações mais seguras
            </IconText>

            <Button variant='outline-light' className="mt-5 px-4">
              Abra sua conta
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Institucional
