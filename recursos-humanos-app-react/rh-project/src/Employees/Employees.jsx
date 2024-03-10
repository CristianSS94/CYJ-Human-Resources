import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { EmployeesTable } from "./EmployeesTable/EmployeesTable";
import axios from "axios";
import { CyjContext } from "../context/CyjContext";
import "./Employees.scss";

export const Employees = () => {
  const {
    employees,
    urlGetemployees,
    render,
    setRender,
    allEmployeesFilter,
    setAllEmployeesFilter,
  } = useContext(CyjContext);
  console.log(employees);
  console.log(allEmployeesFilter);

  //Estado que controla el buscador
  const [search, setSearch] = useState("");

  //Estado que controla el filtrado
  const [selectedOption, setSelectedOption] = useState("nombre");

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    handleChange({ target: { value: search } });
  };

  const handleChange = (e) => {
    const searchFilter = e.target.value;
    setSearch(searchFilter);
    if (search !== "") {
      setAllEmployeesFilter(
        employees.filter((patata) =>
          patata[selectedOption]
            .toLowerCase()
            .includes(searchFilter.toLowerCase())
        )
      );
    } else {
      setAllEmployeesFilter(employees);
    }
  };

  return (
    <Row>
      <Col xs={12} className="col-hijo-employees mt-2">
        <Form className="contenedor-barra-busqueda-botones">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Search by: {selectedOption === "nombre" ? "Name" : "Department"}
            </Dropdown.Toggle>
            {/* El dropDown lo podrías sacar a un componente aparte y poner las opciones como un array por si más adelante quieres añadir más */}
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleDropdownChange("nombre")}>
                Name
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleDropdownChange("departamento")}
              >
                Department
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            type="text"
            className="buscador-empleados"
            placeholder={
              selectedOption === "nombre"
                ? "🔍Name of the employee..."
                : "🔍Department name..."
            }
            value={search}
            onChange={handleChange}
          />
          <Button
            onClick={() => {
              setAllEmployeesFilter(employees);
              setSearch("");
            }}
          >
            See everything
          </Button>
        </Form>{" "}
      </Col>
      <Col xs={12} className="col-hijo2-employes-table table-responsive">
        <EmployeesTable
          urlGetemployees={urlGetemployees}
          allEmployeesFilter={allEmployeesFilter}
          setAllEmployeesFilter={setAllEmployeesFilter}
          render={render}
          setRender={setRender}
        />
      </Col>
    </Row>
  );
};
