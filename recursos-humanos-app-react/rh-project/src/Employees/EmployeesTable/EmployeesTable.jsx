import React, { useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import { DeleteEmployee } from "../DeleteEmployee/DeleteEmployee";
import "./EmployesTable.scss";

export const EmployeesTable = ({ allEmployeesFilter, setRender }) => {
  //Estado que maneja la vista del modal de confirmación

  // Cuando son variables que quieren simbolizar la apertura de un modal se suele poner tipo openDeleteModal o algo así
  const [showDelete, setShowDelete] = useState(false);

  //Estado que almacena la ID de un empleado a eliminar
  const [deleteId, setDeleteId] = useState();

  const navigate = useNavigate();

  const deleteEmployee = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  return (
    <>
      {/* Muy guay esta forma de hacerlo en vez de ternarios tío, yo eso lo aprendí ya currando, guay que se te ocurra */}
      {showDelete && (
        <DeleteEmployee
          setShowDelete={setShowDelete}
          showDelete={showDelete}
          deleteId={deleteId}
          setDeleteId={setDeleteId}
          setRender={setRender}
        />
      )}
      {allEmployeesFilter && allEmployeesFilter[0] !== null && (
        <Table striped bordered hover size="xs">
          {/* Todas las partes de la tabla las componentizaría, el head, body, las rows */}
          <thead>
            <tr>
              <th className="columna-name">Name</th>
              <th className="columna-name">Department</th>
              <th className="columna-name">Salary</th>
              <th className="columna-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allEmployeesFilter?.map((elem) => {
              return (
                <tr key={elem.idEmpleado}>
                  <td>{elem.nombre}</td>
                  <td>{elem.departamento}</td>
                  <td>
                    <NumericFormat
                      value={elem.sueldo}
                      displayType={"text"}
                      thousandSeparator="."
                      decimalSeparator=","
                      suffix="€"
                      decimalScale={2}
                      fixedDecimalScale
                    />
                  </td>
                  <td className="columna-botonera">
                    <Button
                      type="button"
                      onClick={() =>
                        navigate(`/editemployees/${elem.idEmpleado}`)
                      }
                    >
                      Edit
                    </Button>
                    <Button
                      type="button"
                      onClick={() => deleteEmployee(elem.idEmpleado)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};
