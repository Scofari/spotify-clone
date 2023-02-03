import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isPlaying: false,
	isLiked: false,
	currentPlayingId: null,
};

const { actions, reducer: playerReducer } = createSlice({
	name: "player",
	initialState,
	reducers: {
		setIsPlaying(state) {
			state.isPlaying = !state.isPlaying;
		},
		setIsLiked(state) {
			state.isLiked = !state.isLiked;
		},
		setCurrentPlayingId(state, action) {
			state.currentPlayingId = action.payload;
		},
	},
});

export const { setIsPlaying, setIsLiked, setCurrentPlayingId } = actions;

export default playerReducer;
