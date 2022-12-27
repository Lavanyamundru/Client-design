import React from "react";
import "./AssetCard.css";
import Icon from "./Icon";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
const AssetCard = ({
  cardicon,
  Devicenname,
  name,
  processor,
  assignedTo,
  iswarning,
  isRented,
  isSelected,
}) => {
  return (
    <>
      <section className={isSelected ? "card card-menu" : "card"}>
        <div className="row">
          {
            <div id="sub-menu">
              {iswarning && <WarningAmberRoundedIcon sx={{ color: "red" }} />}
              {isRented && <span id="rent">RENTED</span>}
            </div>
          }
          <div className="col-md-10 card-left-menu">
            <Icon iconName={cardicon} iconStyle={"iconStyle"} />
            <div id="device"> {Devicenname}</div>
            <div id="nameof">{name}</div>
            <div id="process"> {processor}</div>
            <div id="assign"> Assigned To:- {assignedTo}</div>
          </div>

          <div className="col-md-2 card-right-menu">
            <Icon iconName={"Path.png"} id="editIcon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AssetCard;
