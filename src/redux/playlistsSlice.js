import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import alanWalker from "../audioclips/Pop/alanWalker.json";

export const fetchGenres = createAsyncThunk(
	"genres/fetchGenresStatus",
	async () => {
		const { data } = await axios.get(
			"https://63ce4f4c6d27349c2b6afb94.mockapi.io/playlists"
		);
		return data;
	}
);

const initialState = {
	status: "loading",
	currentPlaylist: {
		tracks: alanWalker,
	},
	genres: [],
	playlists: [],
};
const { actions, reducer: playlistsReducer } = createSlice({
	name: "playlist",
	initialState,
	reducers: {
		setCurrentPlaylist(state, action) {
			state.currentPlaylist = action.payload;
		},
		setGenres(state, action) {
			state.genres = action.payload;
		},
		setPlaylists(state, action) {
			state.playlists = action.payload;
		},
	},
	extraReducers: {
		[fetchGenres.pending]: (state) => {
			state.status = "loading";
			state.genres = [];
		},
		[fetchGenres.fulfilled]: (state, action) => {
			state.genres = action.payload;
			state.status = "succes";
		},
		[fetchGenres.rejected]: (state) => {
			state.status = "error";
			state.genres = [];
		},
	},
});

export const { setCurrentPlaylist, setGenres, setPlaylists } = actions;

export default playlistsReducer;
