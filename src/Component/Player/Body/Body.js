import React from "react";
import { useDataLayerValue } from "../../../Datalayer/Datalayer";
import "./Body.css";
import Header from "./Header/Header";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow/SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }] = useDataLayerValue();
  // console.log(discover_weekly);
  return (
    <>
      <div className="body">
        <Header spotify={spotify} />
        <div className="body__info">
          <img
            src={discover_weekly?.images[0].url}
            className="body__info__img"
            alt="discover-img"
          />
          <div className="body__infotext">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>

        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon className="body__shuffal" />
            <FavoriteIcon fontSize="large" />
            <MoreHorizIcon />
          </div>

          {/* List of songs */}
          {discover_weekly?.tracks.items.map((item, index) => (
            <SongRow track={item.track} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
