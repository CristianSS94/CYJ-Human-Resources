import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const NavbarApp = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary retoques">
        <Container className="container-padre-navbar">
          <Navbar.Brand as={Link} to="/">
            CYJ Human Resources
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/employees">
                Employees
              </Nav.Link>
              <Nav.Link as={Link} to="/addemployees">
                Add
              </Nav.Link>
              <Nav.Link as={Link} to="/reports">
                Reports
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
