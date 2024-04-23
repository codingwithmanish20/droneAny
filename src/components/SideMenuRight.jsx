import React from "react";

const SideMenuRight = ({ details }) => {
  return (
    <div>
      <div className="rightMenu">
        <div className="leftspace">
          <div className="errorLogs">
            <p className="textFont">Drone status : {details.status}</p>
            <p className="textFont">Drone NO : {details.dronename}</p>
            <p className="textFont">Battery Status : {details.battery}</p>
            <p className="textFont">Drone Color : {details.Drone_color}</p>
            <p className="textFont"> Gsm_signal  : {details.Gsm_signal}</p>
          </div>

          <div className="boxmodel"></div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuRight;
