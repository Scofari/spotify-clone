import { createSlice } from "@reduxjs/toolkit";
import alanWalker from "../audioclips/Pop/alanWalker.json";

const initialState = {
    currentPlaylist: {
        tracks: alanWalker,
    },
    genres: [],
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
    },
});

export const { setCurrentPlaylist, setGenres } = actions;

export default playlistsReducer;
