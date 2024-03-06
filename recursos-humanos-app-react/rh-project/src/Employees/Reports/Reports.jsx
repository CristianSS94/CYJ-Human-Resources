import React, { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { GeneralReport } from "./GeneralReport/GeneralReport";
import { ReportByDepartment } from "./ReportByDepartment/ReportByDepartment";
import { CyjContext } from "../../context/CyjContext";
import "./Reports.scss";

export const Reports = () => {
  const { employees } = useContext(CyjContext);

  console.log(employees);

  const [viewReport, setViewReport] = useState(null);

  const handleView = (num) => {
    if (viewReport === num) {
      setViewReport(null);
    } else if (viewReport !== num) {
      setViewReport(num);
    }
  };

  return (
    <Row className="row-padre-reports">
      <Col xs={12} className="col-hijo-botonera-reports">
        <Button onClick={() => handleView(1)}>General report</Button>{" "}
        <Button onClick={() => handleView(2)}>Report by department</Button>
      </Col>
      {viewReport === 1 ? (
        <Col className="col-hijo-cards-general">
          <GeneralReport employees={employees} />
        </Col>
      ) : viewReport === 2 ? (
        <Col className="col-hijo-cards-departamentos">
          <ReportByDepartment employees={employees} />
        </Col>
      ) : null}
    </Row>
  );
};
