import React, { useContext, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CyjContext } from "../../context/CyjContext";
import "./AddEmployees.scss";

const initialValue = {
  nombre: "",
  departamento: "",
  sueldo: "",
};

const urlPost = "http://localhost:8080/rh-app/empleados";

export const AddEmployees = () => {
  const [addEmployee, setAddEmployee] = useState(initialValue);
  const { setRender } = useContext(CyjContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddEmployee({ ...addEmployee, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post(urlPost, addEmployee)
      .then((resultado) => {
        console.log(resultado);
        navigate("/employees");
        setAddEmployee(initialValue);
        setRender(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Row>
      <Form className="padre-formulario-empleados">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h2>Add an employee</h2>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="nombre"
            value={addEmployee.nombre}
            onChange={handleChange}
            required={true}
          />
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter department"
            name="departamento"
            value={addEmployee.departamento}
            onChange={handleChange}
            required={true}
          />
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter salary"
            name="sueldo"
            value={addEmployee.sueldo}
            onChange={handleChange}
            required={true}
          />
        </Form.Group>
        <div className="d-flex gap-1">
          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="primary" type="button" onClick={() => navigate("/")}>
            Volver
          </Button>
        </div>
      </Form>
    </Row>
  );
};
