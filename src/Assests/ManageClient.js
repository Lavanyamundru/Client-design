/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ManageClient.css";
import NavbarComp from "./Navbar";
import Assetsgrid from "./Assetsgrid";
import Footer from "./Footer";
const ManageClient = () => {
  return (
    <div>
      <NavbarComp />
      <div id="main-content">
        <div id="side-top">
          <div id="side-heading">
            <p id="text">Type:Laptops</p>
            <img id="dropdown" src="Down.png" />
          </div>

          <span id="allClientsMenu">
            <span id="sub-right-menu">
              <form id="input-text">
                <input
                  type={"text"}
                  placeholder="Quick Search"
                  id="Quicksearch"
                />

                <img id="inputIcon" src="Search.png" />
              </form>
            </span>
            <span>
              <img id="sort" src="Filter.png" />
              <img id="sortByName" src="Filter.png" />
            </span>
          </span>
        </div>
        <Assetsgrid />
        <Footer />
      </div>
    </div>
  );
};

export default ManageClient;
