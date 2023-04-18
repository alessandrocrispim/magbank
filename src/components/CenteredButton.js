import React from 'react';
import { Container,Row,  Button } from 'react-bootstrap';

const CenteredButton = ({children, onClick}) => {
  return (
    <Container className=" d-flex justify-content-center">
      <Row>
        <Button className="my-5 px-5 py-3" variant="success" size="lg" onClick={onClick}>
          {children}
        </Button>
      </Row>
    </Container>
  );
}

export default CenteredButton;
