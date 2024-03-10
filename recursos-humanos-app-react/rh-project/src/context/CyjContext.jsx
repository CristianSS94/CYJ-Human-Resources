import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CyjContext = createContext();

export const CyjProvider = ({ children }) => {
  //Estado que almacena los datos de los empleados
  const [employees, setEmployees] = useState([null]);

  //Estado "copia" para trabajar con los datos obtenidos
  const [allEmployeesFilter, setAllEmployeesFilter] = useState([null]);

  const [render, setRender] = useState(false);

  //URL BASE
  const urlGetemployees = "http://localhost:8080/rh-app/empleados";

  // Estado para manejar el useEffect
  useEffect(() => {
    axios
      .get(urlGetemployees)
      .then((res) => {
        setEmployees(res.data);
        setAllEmployeesFilter(res.data);
        // No entiendo bien por pones este setRender, vas a hacer que renderice de nuevo, puede que sea interminable no??
        setRender(false);
      })
      .catch((error) => console.log(error));
  }, [render]);

  return (
    <CyjContext.Provider
      value={{
        employees,
        setEmployees,
        render,
        setRender,
        urlGetemployees,
        allEmployeesFilter,
        setAllEmployeesFilter,
      }}
    >
      {children}
    </CyjContext.Provider>
  );
};
