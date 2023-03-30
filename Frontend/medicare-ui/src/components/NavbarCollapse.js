// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// function NavbarCollapse() {
//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => setExpanded(!expanded);

//   return (
//     <Navbar bg="dark" variant="dark" expand="md" expanded={expanded}>
//       <Navbar.Brand>MediCare</Navbar.Brand>
//       <Navbar.Toggle onClick={handleToggle} />
//       <Navbar.Collapse>
//         <Nav className="mr-auto">
//           <Nav.Item>
//             <NavLink to="/" exact className="nav-link" onClick={handleToggle}>
//               Home
//             </NavLink>
//           </Nav.Item>
//           <Nav.Item>
//             <NavLink to="/medicine" className="nav-link" onClick={handleToggle}>
//               Medicine
//             </NavLink>
//           </Nav.Item>
//           <Nav.Item>
//             <NavLink to="/about" className="nav-link" onClick={handleToggle}>
//               About
//             </NavLink>
//           </Nav.Item>
//           <Nav.Item>
//             <NavLink to="/cart" className="nav-link" onClick={handleToggle}>
//               Cart
//             </NavLink>
//           </Nav.Item>
//         </Nav>
//         <Nav>
//           <NavDropdown
//             title="Account"
//             id="account-dropdown"
//             alignRight
//             className="mr-2"
//           >
//             <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
//           </NavDropdown>
//           <NavLink to="/login" className="nav-link">
//             Login
//           </NavLink>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default NavbarCollapse;





// import React, { useState, useEffect } from "react";
// import { NavItem } from "react-bootstrap";
// import { NavLink, useNavigate } from "react-router-dom";

// function NavbarCollapse() {
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     Boolean(localStorage.getItem("userId"))
//   );
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("userId");
//     localStorage.removeItem("email");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//         <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to="/" className="nav-link">
//                   Home
//                 </NavLink>
//               </NavItem>
//             </li>
//             <li className="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to="/medicine" className="nav-link">
//                   Medicine
//                 </NavLink>
//               </NavItem>
//             </li>
//             <li className="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to="/about" className="nav-link">
//                   About
//                 </NavLink>
//               </NavItem>
//             </li>
//             <li className="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to="/cart" className="nav-link">
//                   Cart
//                 </NavLink>
//               </NavItem>
//             </li>
//           </ul>
//         </div>
//         <div className="mx-auto order-0">
//           <p className="navbar-brand mx-auto">
//             MediCare
//           </p>
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
//             {isLoggedIn ? (
//               <li className="nav-item">
//                 <button className="btn nav-link" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </li>
//             ) : (
//               <li className="nav-item">
//                 <NavItem className="nav-item">
//                   <NavLink to="/login" className="nav-link">
//                     Login
//                   </NavLink>
//                 </NavItem>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default NavbarCollapse;




import React, { useState, useEffect } from "react";
import { NavItem } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

function NavbarCollapse() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavItem className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-item">
                <NavLink to="/medicine" className="nav-link">
                  Medicine
                </NavLink>
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart
                </NavLink>
              </NavItem>
            </li>
          </ul>
        </div>
        <div className="mx-auto order-0">
          <a className="navbar-brand mx-auto" href="#">
            MediCare
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <NavItem className="nav-item">
                  <NavLink to="/login" className="nav-link" onClick={handleLogout}>
                    Logout
                  </NavLink>
                </NavItem>
              </li>
            ) : (
              <li className="nav-item">
                <NavItem className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </NavItem>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarCollapse;




// import React, { useState, useEffect } from "react";
// import { NavItem } from "react-bootstrap";
// import { NavLink, useNavigate } from "react-router-dom";

// function NavbarCollapse() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const checkLocalStorage = () => {
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       setIsLoggedIn(true);
//     }
//   };

//   useEffect(() => {
//     checkLocalStorage();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userId");
//     localStorage.removeItem("email");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//         <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to="/" className="nav-link">
//                   Home
//                 </NavLink>
//               </NavItem>
//             </li>
//             <li className="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to="/medicine" className="nav-link">
//                   Medicine
//                 </NavLink>
//               </NavItem>
//             </li>
//             <li className="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to="/about" className="nav-link">
//                   About
//                 </NavLink>
//               </NavItem>
//             </li>
//             <li className="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to="/cart" className="nav-link">
//                   Cart
//                 </NavLink>
//               </NavItem>
//             </li>
//           </ul>
//         </div>
//         <div className="mx-auto order-0">
//           <p className="navbar-brand mx-auto">
//             MediCare
//           </p>
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
//             {isLoggedIn ? (
//               <li className="nav-item">
//                 <button className="btn nav-link" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </li>
//             ) : (
//               <li className="nav-item">
//                 <NavItem className="nav-item">
//                   <NavLink to="/login" className="nav-link">
//                     Login
//                   </NavLink>
//                 </NavItem>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default NavbarCollapse;







// import React from "react";
// import { NavItem } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

// function NavbarCollapse() {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-md navbar-dark bg-dark">
//         <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
//           <ul class="navbar-nav mr-auto">
//             <li class="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to='/' className="nav-link">Home</NavLink>
//               </NavItem>
//             </li>
//             <li class="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to='/medicine' className="nav-link">Medicine</NavLink>
//               </NavItem>
//             </li>
//             <li class="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to='/about' className="nav-link">About</NavLink>
//               </NavItem>
//             </li>
//             <li class="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to='/cart' className="nav-link">Cart</NavLink>
//               </NavItem>
//             </li>
//           </ul>
//         </div>
//         <div class="mx-auto order-0">
//           <a class="navbar-brand mx-auto" href="#">MediCare</a>
//           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//         </div>
//         <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
//           <ul class="navbar-nav ml-auto">
//             <li class="nav-item">
//               <NavItem className="nav-item">
//                 <NavLink to='/login' className="nav-link">Login</NavLink>
//               </NavItem>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }
// export default NavbarCollapse;