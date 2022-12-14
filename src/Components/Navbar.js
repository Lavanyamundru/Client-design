/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import "./Navbar.css";
function NavbarComp() {
  return (
    <Nav
      className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar"
      id="navbarSupportedContent"
    >
      {/* <a className="navbar-brand" href="#"><strong>Navbar</strong></a> */}
      <Button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">click me</span>
      </Button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li> */}
          <li className="nav-item">
            {/* <a className="nav-link" href="#">
              sidemenu_icon
            </a> */}
            <img src="Group.png" className="nav-link" />
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">
            Home_icon
            </a> */}
            <img src="Home.png" className="nav-link" />
          </li>
          
          <li className="nav-item">
            {/* <a className="nav-link" href="#">
              Manage Clients
            </a> */}
            <div className="nav-div"> Manage Clients</div>
          </li>
          {/* <li className="nav-item"> */}
            {/* <a className="nav-link" href="#">
            Home_icon
            </a> */}
            {/* <img src="Bell.png" className="nav-bell" />
          </li> */}
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">
              {/* <i className="fab fa-facebook-f"></i> */}
              <img src="Bell.png" className="nav-bell" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              {/* <i className="fab fa-twitter"></i> */}
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link">
              <i className="fab fa-instagram"></i>
              <img src="Bell.png" className="nav-bell" />
            </a>
          </li> */}
        </ul>
      </div>
    </Nav>
  );
}

export default NavbarComp;
