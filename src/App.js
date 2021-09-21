import React, { useEffect } from "react";
import Login from "./Component/Login/Login";
import { getTokenFromUrl } from "./spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Component/Player/Player";
import { useDataLayerValue } from "./Datalayer/Datalayer";

const spotify = new SpotifyWebApi();

const App = () => {
  // const [token, setToken] = useState(null);
  const [{ token }, dispatch] = useDataLayerValue();

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    // console.log(hash);
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        // console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        // console.log(playlists);
        dispatch({
          type: "SET_PALYLIST",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("5NDSCX1DJmaKAer7DMckg2").then((response) => {
        // console.log(response);
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [dispatch]);
  // console.log(user);
  // console.log("✌", token);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;
