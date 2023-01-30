import { createSlice } from "@reduxjs/toolkit";
import alanWalker from "../audioclips/Pop/alanWalker.json";

const initialState = {
	currentPlaylist: {
		tracks: alanWalker,
	},
};

const { actions, reducer: playlistsReducer } = createSlice({
	name: "playlist",
	initialState,
	reducers: {
		setCurrentPlaylist(state, action) {
			state.currentPlaylist = action.payload;
		},
	},
});

export const { setCurrentPlaylist } = actions;

export default playlistsReducer;
