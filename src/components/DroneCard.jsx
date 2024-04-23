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
            {console.log(item.battery,'listItem')}
              <div
                key={index}
                className={`box ${item.battery < "70%" ? "status-code":""} ${item.Gsm_signal == "good" ? "goodSignal" : "badSignal"}`}
                style={{ background: item.Drone_color}}
                onClick={() => droneinfo(item)}
              >
                <div className="boxData">
                  {/* <p className="nametext">{item.dronename}</p> */}
                  <p className="nametext">{index+1}s</p>
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
  const [droneDetails,setDroneDetails] = useState(droneData);
  console.log(droneDetails,'detailsdata')
  const chunks = [];
  for (let i = 0; i < droneData.length; i += 100) {
    chunks.push(droneData.slice(i, i + 100));
  }

  const list = ['active','disable']
  
  return (
    <>
    {/* flexData */}
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
