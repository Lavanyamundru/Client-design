import React from 'react'
import AddIcon from "@mui/icons-material/Add";
const Footer = () => {
  return (
        <div className="footer">
          <span>
            <span className="page-num">1</span>
            <span className="page-num2">2</span>
            <span className="page-num3">3</span>
            <span id="footerLeftMenu"> Showing records 1 to 11 of 30</span>
          </span>
          <span id="footerRightMenu">
            <button id="clientBtn">
              {" "}
              <AddIcon sx={{ ml: -1, height: 30, width: 35 }} /> Add Asset
            </button>
          </span>
        </div>
  )
}

export default Footer
