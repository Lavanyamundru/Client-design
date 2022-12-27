import React from "react";
import Data from "./assetsData";
import AssetCard from "./AssetCard";
const Assetsgrid = () => {
  return (
    <div className="wrapper">
      {Data.map((data) => {
        return (
          <AssetCard
            key={data.Devicenname}
            cardicon={data.cardicon}
            Devicenname={data.Devicenname}
            name={data.name}
            processor={data.processor}
            assignedTo={data.assignedTo}
            iswarning={data.iswarning}
            isRented={data.isRented}
            isSelected={data.isSelected}
          />
        );
      })}
    </div>
  );
};

export default Assetsgrid;
