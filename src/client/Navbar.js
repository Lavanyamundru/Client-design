/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Nav from "react-bootstrap/Nav";
import Avatar from "@mui/material/Avatar";
import "./Navbar.css";
function NavbarComp() {
  return (
    <Nav
      className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar"
      id="navbarSupportedContent"
    >
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <img src="Group.png" className="nav-group" />
          </li>
          <li className="nav-item">
            <img src="Home.png" className="nav-home" />
          </li>

          <li className="nav-item">
            <div className="nav-div"> Manage Clients</div>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">
              <img src="Bell.png" className="nav-bell" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <Avatar
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
                sx={{ mr: 9 }}
              />
            </a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default NavbarComp;
