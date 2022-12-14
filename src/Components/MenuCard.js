import React from "react";

const MenuCard = ({clientname,color}) => {
  return (
    <div className={color?"menuCard":"nonActive"}>
      <div>
        <span className="menuContent">{clientname}</span>
      </div>
    </div>
  );
};

export default MenuCard;
