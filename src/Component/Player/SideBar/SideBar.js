import React from "react";
import "./SideBar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "../../../Datalayer/Datalayer";

const SideBar = () => {
  const [{ playlists }] = useDataLayerValue();
  // console.log(playlists);
  return (
    <>
      <div className="sidebar">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="spotify-img"
          className="sidebar__logo"
        />

        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Libary" />
        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr />

        {playlists?.items?.map((playlist, index) => (
          <SidebarOption title={playlist.name} key={index} />
        ))}
      </div>
    </>
  );
};

export default SideBar;
