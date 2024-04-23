import React, { useState } from "react";
import SideMenu from "./SideMenu";
import { DroneCard } from "./DroneCard";
import SideMenuRight from "./SideMenuRight";
import ListCard from "./ListCard";
import Mapboxgp from "./Mapboxgp";
const Gridepage = () => {
  const [dronDetails, setDroneDetails] = useState({});
  const [activeCard, getactiveCard] = useState("Grid");

  return (
    <div>
      <div className="card">
        <SideMenu selectedCard={getactiveCard} activeCard={activeCard} />
        {activeCard == "Grid" && <DroneCard getDrone={setDroneDetails} />}
        {activeCard == "List" && (
          <div>
            <ListCard />
            <Mapboxgp />
          </div>
        )}

        <SideMenuRight details={dronDetails} />
      </div>
    </div>
  );
};

export default Gridepage;
