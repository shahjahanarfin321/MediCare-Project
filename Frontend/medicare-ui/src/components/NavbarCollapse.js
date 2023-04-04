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
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">

            {
              localStorage.getItem("userId") ?
                <>
                  <li className="nav-item">
                    <NavItem className="nav-item">
                      <NavLink to="/medicine" className="nav-link">
                        Medicine
                      </NavLink>
                    </NavItem>
                  </li>
                  <li className="nav-item">
                    <NavItem className="nav-item">
                      <NavLink to="/appointment" className="nav-link">
                        Appointment
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
                  <li className="nav-item">
                    <NavItem className="nav-item">
                      <NavLink to="/test" className="nav-link">
                        Health Test
                      </NavLink>
                    </NavItem>
                  </li>
                  <li className="nav-item">
                    <NavItem className="nav-item">
                      <NavLink to="/healthlibrary" className="nav-link">
                        Health Library
                      </NavLink>
                    </NavItem>
                  </li>
                  <li className="nav-item">
                    <NavItem className="nav-item">
                      <NavLink to="/healthconcerns" className="nav-link">
                        Health Concerns
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
                </>
                :
                <>
                  <li className="nav-item">
                    <NavItem className="nav-item">
                      <NavLink to="/" className="nav-link">
                        Home
                      </NavLink>
                    </NavItem>
                  </li>
                </>
            }
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
            {localStorage.getItem("userId") ? (
              <li className="nav-item">
                <NavItem className="nav-item">
                  <NavLink to="/login" className="nav-link" onClick={handleLogout}>
                    Logout
                  </NavLink>
                </NavItem>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavItem className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </NavItem>
                </li>
                <li className="nav-item">
                  <NavItem className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </NavItem>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarCollapse;