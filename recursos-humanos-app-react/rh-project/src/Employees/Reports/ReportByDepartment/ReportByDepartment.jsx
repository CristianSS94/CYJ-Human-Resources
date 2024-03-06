import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { NumericFormat } from "react-number-format";
import "../../Reports/Reports.scss";

export const ReportByDepartment = ({ employees }) => {
  const departmentData = employees.reduce((data, employee) => {
    const department = employee.departamento;
    const salary = employee.sueldo;

    if (!data[department]) {
      data[department] = {
        employees: 1,
        totalSalary: salary,
      };
    } else {
      data[department].employees++;
      data[department].totalSalary += salary;
    }

    return data;
  }, {});

  console.log(departmentData);

  return (
    <Row className="row-padre-cards-reportbydepartments">
      {Object.entries(departmentData).map(([department, data]) => (
        <Card className="cards-reports-department" style={{ width: "18rem" }}>
          <Card.Title>{department}</Card.Title>
          <ListGroup variant="flush" className="cards-reports-department-hijo">
            <ListGroup.Item className="cards-reports-department-hijo">
              Employees: {data.employees}
            </ListGroup.Item>
            <ListGroup.Item className="cards-reports-department-hijo">
              Total Salary:{" "}
              <NumericFormat
                value={data.totalSalary}
                displayType={"text"}
                thousandSeparator="."
                decimalSeparator=","
                suffix="€"
                decimalScale={2}
                fixedDecimalScale
              />
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </Row>
  );
};
