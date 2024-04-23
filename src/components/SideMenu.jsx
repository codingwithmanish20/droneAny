import React from "react";
import listIcon from "../images/list.png";
import gridIcon from "../images/grid.png";

const SideMenu = ({ selectedCard, activeCard }) => {
  return (
    <div>
      <div className="sideMenu">
        <div
          className={`gridMenu margintop  ${
            activeCard == "Grid" ? "active" : ""
          }`}
          onClick={() => selectedCard("Grid")}
        >
            <div className="ImgContaine">
            <img src={gridIcon} alt="listIcon" width={20} height={20} />
          </div>
          Grid
        </div>
        <div
          className={`gridMenu ${activeCard == "List" ? "active" : ""}`}
          onClick={() => selectedCard("List")}
        >
          <div className="ImgContaine">
            <img src={listIcon} alt="listIcon" width={20} height={20} />
          </div>
          List
        </div>
        <div
          className={`gridMenu ${activeCard == "GridData" ? "active" : ""}`}
          onClick={() => selectedCard("GridData")}
        >
          GridData
        </div>
        <div
          className={`gridMenu ${activeCard == "ListData" ? "active" : ""}`}
          onClick={() => selectedCard("ListData")}
        >
          ListData
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
