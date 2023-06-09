import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavbarCollapse() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    navigate("/login");
    handleToggle();
  };

  const handleAppointment = () => {
    navigate("/appointmentlist");
    handleToggle();
  };

  const handleLabTest = () => {
    navigate("/labtest");
    handleToggle();
  };

  const hancleMyOrders = () => {
    navigate("/myorders");
    handleToggle();
  };

  const isAdmin = localStorage.getItem("email") === "admin@gmail.com";

  return (
    <Navbar bg="dark" variant="dark" expand="md" expanded={expanded}>
      <Navbar.Brand>MediCare</Navbar.Brand>
      <Navbar.Toggle onClick={handleToggle} />
      {
        localStorage.getItem("userId") ?
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Item>
                <NavLink to="/medicine" className="nav-link" onClick={handleToggle}>
                  Medicine
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/doctorappointment" className="nav-link" onClick={handleToggle}>
                  Doctor Appointment
                </NavLink>
              </Nav.Item>
              {
                isAdmin &&
                <Nav.Item>
                <NavLink to="/createdoctorappointment" className="nav-link" onClick={handleToggle}>
                  Create Doctor
                </NavLink>
              </Nav.Item>
              }
              <Nav.Item >
                <NavLink to="/test" className="nav-link" onClick={handleToggle}>
                  Health Test
                </NavLink>
              </Nav.Item>
              <Nav.Item >
                <NavLink to="/healthlibrary" className="nav-link" onClick={handleToggle}>
                  Health Library
                </NavLink>
              </Nav.Item>
              <Nav.Item >
                <NavLink to="/healthconcerns" className="nav-link" onClick={handleToggle}>
                  Health Concerns
                </NavLink>
              </Nav.Item>
              {isAdmin &&
                <Nav.Item >
                  <NavLink to="/createhealthconcerns" className="nav-link" onClick={handleToggle}>
                    Create Concerns
                  </NavLink>
                </Nav.Item>
              }
              {isAdmin &&
                <Nav.Item >
                  <NavLink to="/manageproduct" className="nav-link" onClick={handleToggle}>
                    Manage Product
                  </NavLink>
                </Nav.Item>
              }
            </Nav>
            <Nav>
              
              <NavDropdown
                title="Profile"
                id="account-dropdown"
                alignLeft
                className="mr-2"
              >
                <NavDropdown.Item onClick={handleLabTest}>My Lab Test</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleAppointment}>My Appointment</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={hancleMyOrders}>My Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <NavLink to="/cart" className="nav-link" onClick={handleToggle}>
                  Cart
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          :
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Item>
                <NavLink to="/" exact className="nav-link" onClick={handleToggle}>
                  Home
                </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/about" className="nav-link" onClick={handleToggle}>
                    About
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/contactus" className="nav-link" onClick={handleToggle}>
                    Contact
                  </NavLink>
                </Nav.Item>
                </Nav>
                <Nav>
                  <Nav.Item>
                    <NavLink to="/register" className="nav-link" onClick={handleToggle}>
                      Register
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink to="/login" className="nav-link" onClick={handleToggle}>
                      Login
                    </NavLink>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
           }
      </Navbar>
    );
    }

export default NavbarCollapse;