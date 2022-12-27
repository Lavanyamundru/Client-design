/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./AllClients.css";
import NavbarComp from "./Navbar";
import MenuCard from "./MenuCard";
import { data } from "./clients";
import AddIcon from "@mui/icons-material/Add";
const AllClients = () => {
  let clientsData = data.clientsData;
  let activeClients = data.activeClients;
  let bgcolor = true;
  return (
    <div>
      <NavbarComp />
      <div id="content">
        <div id="heding">ACTIVE CLIENTS WITH RUNNING INSTANCES</div>
        <div className="clientsData">
          {clientsData &&
            clientsData.map((client) => (
              <MenuCard
                key={client}
                clientname={client.clientname}
                color={bgcolor}
              />
            ))}
        </div>
        <div>
          <div id="heading">
            <span id="sub-left-menu">ALL CLIENTS({activeClients.length})</span>
            <span id="allClientsMenu">
              <span id="right-menu">
                <form>
                  <input
                    type={"text"}
                    placeholder="Quick Search"
                    id="Quicksearch"
                  />

                  <img id="inputIcon" src="Search.png" />
                </form>
              </span>
              <span>
                <span id="sortByName1">Sort by Name</span>
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
            <span className="num">1</span>
            <span className="num2">2</span>
            <span id="footerLeftMenu"> Showing records 1 to 11 of 14</span>
          </span>
          <span id="footerRightMenu">
            <button id="clientBtn">
              {" "}
              <AddIcon sx={{ ml: -1, height: 30, width: 35 }} /> New Client
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AllClients;
