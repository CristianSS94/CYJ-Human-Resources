import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { NumericFormat } from "react-number-format";

export const GeneralReport = ({ employees }) => {
  //Numero de departamentos de la compañía
  const uniqueDepartments = new Set();
  employees.forEach((employee) => {
    uniqueDepartments.add(employee.departamento);
  });

  //Salario total de toda la compañía
  const totalSalary = employees.reduce(
    (total, employee) => total + employee.sueldo,
    0
  );

  return (
    <Row>
      <Col xs={12}>Number of employees: {employees?.length}</Col>
      <Col xs={12}>Number of department: {uniqueDepartments.size}</Col>
      <Col xs={12}>
        Total employee salary:{" "}
        <NumericFormat
          value={totalSalary}
          displayType={"text"}
          thousandSeparator="."
          decimalSeparator=","
          suffix="€"
          decimalScale={2}
          fixedDecimalScale
        />
      </Col>
      <Col xs={12}>
        {" "}
        Average salary per employee:{" "}
        <NumericFormat
          value={totalSalary / employees.length}
          displayType={"text"}
          thousandSeparator="."
          decimalSeparator=","
          suffix="€"
          decimalScale={2}
          fixedDecimalScale
        />
      </Col>
      <Col>
        {" "}
        Average salary by department:{" "}
        <NumericFormat
          value={totalSalary / uniqueDepartments.size}
          displayType={"text"}
          thousandSeparator="."
          decimalSeparator=","
          suffix="€"
          decimalScale={2}
          fixedDecimalScale
        />
      </Col>
    </Row>
  );
};
