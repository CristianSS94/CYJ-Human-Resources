import React from "react";
import { Col, Row } from "react-bootstrap";
import "./LandingApp.scss";

export const LandingApp = () => {
  return (
    <Row className="row-padre-landing">
      <Col className="col-hijo-landing">
        <h1> CYJ Human Resources </h1>
      </Col>
    </Row>
  );
};
