import { configureStore } from "@reduxjs/toolkit";
import defaultReducer from "./defaultSlice";
import playerReducer from "./playerSlice";
import playlistsReducer from "./playlistsSlice";

export default configureStore({
	reducer: {
		playlists: playlistsReducer,
		player: playerReducer,
		default: defaultReducer,
	},
	devTools: true,
});
