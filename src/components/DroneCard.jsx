import React, { useEffect, useState } from "react";
import droneData from "../DataList/Dronedata";
import Mapboxgp from "./Mapboxgp";
import InactiveDrone from "../DataList/InactiveDrone";
import batterylogo from "../images/battery-charge.png";

const GridData = ({ droneinfo, data }) => {
  return (
    <>
      <div className="boxContainer">
        <div className="cardBox">
          {data.map((item, index) => (
            <>
              {console.log(item, "listItem")}
              <div
                key={index}
                className={`box ${item.battery < 40 ? "status-code" : ""} ${
                  item.Gsm_signal == "good" ? "goodSignal" : "badSignal"
                } ${item.status == "active" ? "droneActive" : "droneDisable"} ${item.status=="inactive" && "droneInActive"}`}
              
                onClick={() => droneinfo(item)}
              >
                <div className="boxData">
                  {/* <p className="nametext">{item.dronename}</p> */}
                  <p className="nametext">{index + 1}s</p>
                  {/* <img src={batterylogo} alt="" width={15} height={15} /> */}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

const DroneCardGrid = ({ droneinfo }) => {
  const [droneDetails, setDroneDetails] = useState(droneData);
  const [activemenu, setActiveMenu] = useState("All");

  function DroneFilter(name) {
    setActiveMenu(name);
    if (name == "All") {
      setDroneDetails(droneData);
    } else if (name == "Active") {
      console.log(droneData, "details");
      let filterData = droneData.filter((item) => item.status == "active");
      setDroneDetails(filterData);
    } else if (name == "Disable") {
      console.log(droneData, "itemdatadd");
      let filterData = droneData.filter((item) => item.status == "disable");
      setDroneDetails(filterData);
    } else if (name == "Battery") {
      let filterData = droneData.filter((item) => item.battery < 40);
      setDroneDetails(filterData);
    }
  }
  
  const chunks = [];
  for (let i = 0; i < droneDetails.length; i += 100) {
    chunks.push(droneDetails.slice(i, i + 100));
  }

  const list = ["All", "Active", "Disable", "Battery"];

  return (
    <>
      {/* flexData */}
      <div className="filterList">
            {list.map((item) => (
              <>
                <div
                  className={`menu ${item == activemenu ? "activemenu" : ""}`}
                  onClick={() => DroneFilter(item)}
                >
                  {item}
                </div>
              </>
            ))}
          </div>
      <div className="droneContainer">
        <div className="dronecard">
          
          <div className="droneBox">

            {/* {droneData.map((item, index) => (
              <>
                <GridData
                  key={index}
                  droneinfo={droneinfo}
                  limit={index + 1}
                  initialLimit={index - 1}
                />
              </>
            ))} */}


            {chunks.map((chunk, index) => (
              <GridData key={index} droneinfo={droneinfo} data={chunk} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const DroneCard = ({ getDrone }) => {
  return (
    <div>
      <DroneCardGrid droneinfo={getDrone} />
      <Mapboxgp />

      {/* <GridData /> */}
    </div>
  );
};

export { DroneCard, DroneCardGrid };
