import React, { useContext, useEffect, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditEmployees.scss";
import { CyjContext } from "../../context/CyjContext";

const urlGetEmployee = "http://localhost:8080/rh-app/empleados/";

export const EditEmployees = () => {
  const [infoEmployee, setInfoEmployee] = useState({});
  const { employee_id } = useParams();
  const navigate = useNavigate();
  const { setRender } = useContext(CyjContext);

  useEffect(() => {
    if (employee_id !== undefined) {
      console.log(urlGetEmployee + employee_id);
      axios
        .get(urlGetEmployee + employee_id)
        .then((resultado) => {
          setInfoEmployee(resultado.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoEmployee({ ...infoEmployee, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .put(urlGetEmployee + employee_id, infoEmployee)
      .then((resultado) => {
        console.log(resultado);
        navigate("/employees");
        setRender(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Row>
      <Form className="padre-formulario-editar-empleados">
        <h2>Edit employee</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="nombre"
            value={infoEmployee.nombre}
            onChange={handleChange}
            required={true}
          />
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter department"
            name="departamento"
            value={infoEmployee.departamento}
            onChange={handleChange}
            required={true}
          />
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter salary"
            name="sueldo"
            value={infoEmployee.sueldo}
            onChange={handleChange}
            required={true}
          />
        </Form.Group>
        <div className="d-flex gap-1">
          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={() => navigate("/employees")}
          >
            Volver
          </Button>
        </div>
      </Form>
    </Row>
  );
};
