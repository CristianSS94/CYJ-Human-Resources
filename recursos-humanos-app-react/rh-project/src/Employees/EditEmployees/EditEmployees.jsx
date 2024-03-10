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
        // Esta guay usar el destructurin en estos casos para no ir arrastrando los variable.key
        //   se podría poner {data } en  vez de resultado
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
    // Me gusta mucho también lo de crear keys dinámicas, es muy guay, también lo aprendí tarde.
    // Me está encantando porque me estás soprendiendo tío.
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
  // Para todos los usos de las keys de infoEmployee se puede hacer destructuring tambien
  // de la siguiente forma
  // const { nombre, departamento, sueldo, } = infoEmployee; 
  // y usas las variables solas
  
  
  // En realidad, este componente no termino de entenderlo.Si le das al botón click navega a una página diferente de la de la tabla
  // y en la carga de este componente hace una llamada al back para traer los mismos datos del empleado que ya tiene en la tabla.
  // Puedes hacer una cosa que se llama rowExpansion que lo que hace es expandir la fila hacia abajo y muestra el componente de edición si quieres.
  // Si no te gusta esta solución porque visualmente prefieres la tuya, haz el routing pero pásale los parámetros por la url si quieres o almacénalos en el context y cógelos en el otro sitio,
  // asi te acostumbras a ahorrar llamadas duplicadas a apis
  
  
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
