import React from "react";
import { NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarCollapse() {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <NavItem className="nav-item">
                <NavLink to='/' className="nav-link">Home</NavLink>
              </NavItem>
            </li>
            <li class="nav-item">
              <NavItem className="nav-item">
                <NavLink to='/medicine' className="nav-link">Medicine</NavLink>
              </NavItem>
            </li>
            <li class="nav-item">
              <NavItem className="nav-item">
                <NavLink to='/about' className="nav-link">About</NavLink>
              </NavItem>
            </li>
            <li class="nav-item">
              <NavItem className="nav-item">
                <NavLink to='/cart' className="nav-link">Cart</NavLink>
              </NavItem>
            </li>
          </ul>
        </div>
        <div class="mx-auto order-0">
          <a class="navbar-brand mx-auto" href="#">MediCare</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NavItem className="nav-item">
                <NavLink to='/login' className="nav-link">Login</NavLink>
              </NavItem>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default NavbarCollapse;