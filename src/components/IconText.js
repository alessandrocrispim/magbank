import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({
  icon,
  size = 1,
  color = "#000",
  className = "",
  textClassname = "",
  children,
  onClick,
}) => {
  return (
    <Row onClick={onClick} className="my-2 d-flex align-items-center">
      <Col xs={size} className="d-flex justify-content-center ">
        <FontAwesomeIcon
          icon={icon}
          size={`${size}x`}
          color={color}
          textClassname={textClassname}
          className={className}
        />
      </Col>
      <Col xs={12 - size} className={textClassname}>
        {children}
      </Col>
    </Row>
  );
};

export default IconText;
