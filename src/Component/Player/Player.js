import React from "react";
import Body from "./Body/Body";
import "./Player.css";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";

const Player = ({ spotify }) => {
  return (
    <>
      <div className="player">
        <div className="palyer__body">
          <SideBar />
          <Body spotify={spotify} />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Player;
