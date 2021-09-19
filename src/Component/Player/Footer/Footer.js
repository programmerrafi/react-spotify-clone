import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";

import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <img
            src="https://images.squarespace-cdn.com/content/v1/562add1fe4b00abcf44307b8/1539348695834-PF88FNGUIIQ07VH4T9WR/ironbell_glorytogloy_albumart-copy.jpg?format=1000w"
            alt="album-img"
            className="footer__albumLogo"
          />
          <div className="footer__songInfo">
            <h4>Yeah!</h4>
            <p>Usher</p>
          </div>
        </div>

        <div className="footer__center">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" />
          <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </div>

        <div className="footer__right">
          <Grid container spacing={2} className="grid__container">
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider
                size="small"
                defaultValue={30}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Footer;
