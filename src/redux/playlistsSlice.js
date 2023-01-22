import { createSlice } from "@reduxjs/toolkit";
import alanWalker from "../audioclips/Pop/alanWalker.json";

const initialState = {
	searchTerm: "",
	currentPlaylist: {
		id: 1,

		tracks: alanWalker,
	},
};

const { actions, reducer: playlistsReducer } = createSlice({
	name: "playlist",
	initialState,
	reducers: {
		setSearchTerm(state, action) {
			state.searchTerm = action.payload.searchTerm;
		},
		setCurrentPlaylist(state, action) {
			state.currentPlaylist = action.payload;
			// const currentTrack = state.currentPlaylist.tracks.find(
			// 	(track) => track.id !== action.payload.id
			// );

			// if (state.currentPlaylist.isPlaying) {
			// 	state.currentPlaylist.tracks[currentTrack]?.sound?.pause();
			// } else {
			// 	state.currentPlaylist.tracks[currentTrack]?.sound?.play();
			// }
		},
	},
});

export const { setSearchTerm, setCurrentPlaylist } = actions;

export default playlistsReducer;
