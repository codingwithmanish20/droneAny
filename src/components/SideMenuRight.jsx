import React from "react";

const SideMenuRight = ({ details }) => {
  return (
    <div>
      <div className="rightMenu">
        <div className="leftspace">
          <div className="errorLogs">
            <p className="textFont" style={{fontFamily:"sans-serif", fontSize:"16px", marginBottom:"16px" }}  >Drone status : {details.status}</p>
            <p className="textFont" style={{fontFamily:"sans-serif", fontSize:"12px", marginBottom:"12px" }} >Drone NO : {details.dronename}</p>
            <p className="textFont" style={{fontFamily:"sans-serif", fontSize:"12px", marginBottom:"12px" }}>Battery Status : {details.battery}</p>
            <p className="textFont" style={{fontFamily:"sans-serif", fontSize:"12px", marginBottom:"12px" }}>Drone Color : {details.Drone_color}</p>
            <p className="textFont"style={{fontFamily:"sans-serif", fontSize:"12px", marginBottom:"12px" }}> Gps_signal  : {details.Gsm_signal}</p>
          </div>

          <div className="boxmodel"></div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuRight;
