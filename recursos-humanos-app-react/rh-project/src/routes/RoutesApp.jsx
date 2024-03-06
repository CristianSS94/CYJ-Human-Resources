import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavbarApp } from "../components/Navbar/NavbarApp";
import { LandingApp } from "../components/Landing/LandingApp";
import { AddEmployees } from "../Employees/AddEmployees/AddEmployees";
import { EditEmployees } from "../Employees/EditEmployees/EditEmployees";
import { Employees } from "../Employees/Employees";
import { Reports } from "../Employees/Reports/Reports";
import { Footer } from "../components/Footer/Footer";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <NavbarApp />
      <Container fluid>
        <Routes>
          <Route path="/" element={<LandingApp />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/addemployees" element={<AddEmployees />} />
          <Route
            path="/editemployees/:employee_id"
            element={<EditEmployees />}
          />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};
