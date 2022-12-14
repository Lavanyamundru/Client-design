/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ManageClient.css";
// or less ideally
// import { Button } from 'react-bootstrap';
import NavbarComp from "./Navbar";
import MenuCard from "./MenuCard";
import { data } from "../clients";
import AddIcon from "@mui/icons-material/Add";

const ManageClient = () => {
  let clientsData = data.clientsData;
  let activeClients = data.activeClients;
  let bgcolor = true;
  // console.log(clientsData);
  return (
    <div>
      <NavbarComp />
      <div id="main-content">
        <div id="side-heading">ACTIVE CLIENTS WITH RUNNING INSTANCES</div>
        <div className="clientsData">
          {clientsData &&
            clientsData.map((client) => (
              // <h4 key={}>{client.clientname}</h4>
              <MenuCard
                key={client}
                clientname={client.clientname}
                color={bgcolor}
              />
            ))}
        </div>
        <div >
          <div id="side-heading">
            <span id="sub-left-menu">ALL CLIENTS({activeClients.length})</span>
            <span id="allClientsMenu">
              <span id="sub-right-menu">
                <form>
                  <input
                    type={"text"}
                    placeholder="Quick Search"
                    id="Quicksearch"
                  />
                  {/* <img src="Search.png" id="inputIcon" /> */}
                  <img id="inputIcon" />
                  {/* <button type="submit">Search</button> */}
                </form>
              </span>
              <span>
                <span id="sortByName">Sort by Name</span>
                {/* <img src="Bell.png" className="nav-bell" /> */}
              </span>
            </span>
          </div>
          <div className="allClients">
            {activeClients &&
              activeClients.map((client) => (
                <MenuCard
                  key={client}
                  clientname={client.clientname}
                  color={!bgcolor}
                />
              ))}
          </div>
        </div>
        <hr />
        <div className="footer">
          <span>
            <span className="page-num">1</span>
            <span className="page-num2">2</span>
            <span id="footerLeftMenu"> Showing records 1 to 11 of 14</span>
          </span>
          <span id="footerRightMenu">
            <button id="clientBtn">
              {" "}
              <AddIcon /> New Client
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ManageClient;
