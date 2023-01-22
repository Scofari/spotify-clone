import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./playerSlice";
import playlistsReducer from "./playlistsSlice";

export default configureStore({
	reducer: {
		playlists: playlistsReducer,
		player: playerReducer,
	},
	devTools: true,
});
