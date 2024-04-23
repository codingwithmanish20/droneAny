import React from "react";
import DroneData from "../DataList/Dronedata";

const ListCard = () => {
  const list = [
    "status",
    "dronename",
    "battery",
    "memory",
    "Drone_color",
    "status",
    "dronename",
    "battery",
    "memory",
    "Drone_color",
    "status",
    "dronename",
  ];
  return (
    <>
    <div className="ListView">

   
      <div class="table">
        <div class="table-row header">
          {list.map((item) => (
            <>
              <div class="table-cell">{item}</div>
            </>
          ))}
        </div>
        {console.log(DroneData, "datayyy")}
        {DroneData.map((item) => (
          <>
            <div class="table-row">
              <div class="table-cell">{item.status}</div>
              <div class="table-cell">{item.dronename}</div>
              <div class="table-cell">{item.battery}</div>
              <div class="table-cell">{item.memory}</div>
              <div class="table-cell">{item.Drone_color}</div>
              <div class="table-cell">{item.status}</div>
              <div class="table-cell">{item.dronename}</div>
              <div class="table-cell">{item.battery}</div>
              <div class="table-cell">{item.memory}</div>
              <div class="table-cell">{item.Drone_color}</div>
              <div class="table-cell">{item.status}</div>
              <div class="table-cell">{item.dronename}</div>
            </div>
          </>
        ))}
       
             

      </div>
      </div>
    </>
  );
};

export default ListCard;
