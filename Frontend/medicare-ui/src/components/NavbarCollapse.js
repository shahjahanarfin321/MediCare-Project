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
              <Nav.Item>
                <NavLink to="/createdoctorappointment" className="nav-link" onClick={handleToggle}>
                  Create Doctor
                </NavLink>
              </Nav.Item>

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
              <Nav.Item >
                <NavLink to="/manageproduct" className="nav-link" onClick={handleToggle}>
                  Manage Product
                </NavLink>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <NavLink to="/cart" className="nav-link" onClick={handleToggle}>
                  Cart
                </NavLink>
              </Nav.Item>
              <NavDropdown
                title="Profile"
                id="account-dropdown"
                alignRight
                className="mr-2"
              >
                <NavDropdown.Item onClick={handleAppointment}>My Appointment</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
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
                <NavLink to="/medicine" className="nav-link" onClick={handleToggle}>
                  Medicine
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/about" className="nav-link" onClick={handleToggle}>
                  About
                </NavLink>
              </Nav.Item>
            </Nav>
            <Nav>
              <NavLink to="/login" className="nav-link" onClick={handleToggle}>
                Login
              </NavLink>
              <NavLink to="/register" className="nav-link" onClick={handleToggle}>
                Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
      }

    </Navbar>
  );
}

export default NavbarCollapse;



// import React, { useState, useEffect } from "react";
// import { NavItem } from "react-bootstrap";
// import { NavLink, useNavigate } from "react-router-dom";

// function NavbarCollapse() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userId");
//     localStorage.removeItem("email");
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//         <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
//           <ul className="navbar-nav mr-auto">

//             {
//               localStorage.getItem("userId") ?
//                 <>
//                   <li className="nav-item">
//                     <NavItem className="nav-item">
//                       <NavLink to="/medicine" className="nav-link">
//                         Medicine
//                       </NavLink>
//                     </NavItem>
//                   </li>
//                   <li className="nav-item">
//                     <NavItem className="nav-item">
//                       <NavLink to="/appointment" className="nav-link">
//                         Appointment
//                       </NavLink>
//                     </NavItem>
//                   </li>
//                   <li className="nav-item">
//                     <NavItem className="nav-item">
//                       <NavLink to="/cart" className="nav-link">
//                         Cart
//                       </NavLink>
//                     </NavItem>
//                   </li>
//                   <li className="nav-item">
//                     <NavItem className="nav-item">
//                       <NavLink to="/test" className="nav-link">
//                         Health Test
//                       </NavLink>
//                     </NavItem>
//                   </li>
//                   <li className="nav-item">
//                     <NavItem className="nav-item">
//                       <NavLink to="/healthlibrary" className="nav-link">
//                         Health Library
//                       </NavLink>
//                     </NavItem>
//                   </li>
//                   <li className="nav-item">
//                     <NavItem className="nav-item">
//                       <NavLink to="/healthconcerns" className="nav-link">
//                         Health Concerns
//                       </NavLink>
//                     </NavItem>
//                   </li>
//                   <li className="nav-item">
//                     <NavItem className="nav-item">
//                       <NavLink to="/about" className="nav-link">
//                         About
//                       </NavLink>
//                     </NavItem>
//                   </li>
//                 </>
//                 :
//                 <>
//                   <li className="nav-item">
//                     <NavItem className="nav-item">
//                       <NavLink to="/" className="nav-link">
//                         Home
//                       </NavLink>
//                     </NavItem>
//                   </li>
//                 </>
//             }
//           </ul>
//         </div>
//         <div className="mx-auto order-0">
//           <a className="navbar-brand mx-auto" href="#">
//             MediCare
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target=".dual-collapse2"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>
//         <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
//           <ul className="navbar-nav ml-auto">
//             {localStorage.getItem("userId") ? (
//               <li className="nav-item">
//                 <NavItem className="nav-item">
//                   <NavLink to="/login" className="nav-link" onClick={handleLogout}>
//                     Logout
//                   </NavLink>
//                 </NavItem>
//               </li>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <NavItem className="nav-item">
//                     <NavLink to="/login" className="nav-link">
//                       Login
//                     </NavLink>
//                   </NavItem>
//                 </li>
//                 <li className="nav-item">
//                   <NavItem className="nav-item">
//                     <NavLink to="/register" className="nav-link">
//                       Register
//                     </NavLink>
//                   </NavItem>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default NavbarCollapse;