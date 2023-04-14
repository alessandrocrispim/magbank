import React from 'react'
import { Card, Col, Row, Image, Button } from 'react-bootstrap'
import logo from '../assets/logo__magic-pay--mobile.png'
import logoDesktop from '../assets/logo__magic-pay.png'
import './Hero.scss'

const Hero = () => {
  return (
    <Card className="text-center text-light overflow-hidden hero">
      <Row className="my-lg-5">
        <Col lg className="text-lg-end my-lg-5">
          <Image className="d-lg-none" src={logo} />
          <Image className="d-none d-lg-inline-block" src={logoDesktop} />
        </Col>
        <Col lg className="text-lg-start my-lg-5">
          <p>Pague suas contas pelo nosso APP</p>
          <Button variant="outline-light">Abra sua conta</Button>
        </Col>
      </Row>
    </Card>
  );
}

export default Hero
