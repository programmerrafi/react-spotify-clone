export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   Remove after developing
  // token:
  //   " BQAJzXo5rIkzNJDkE5_H3UvCzeAXOfP4Dbb7Lq6PRH6_tw56yTJ9NcpfiedC01-1Fll5aprsIS9QPXaGIfP1fZ_vDJNTA6vrYEMnVHO3TPEltHlNkdAvVo3KB0QrmkGIsr__4UKFubeDyjXxZGQXDyit8oeF0CgTagKJUw6yOgF2xooJ",
};

const reducer = (state, action) => {
  //   console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PALYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
