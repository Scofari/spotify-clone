import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isPlaying: false,
    currentPlayingId: 69,
};

const { actions, reducer: playerReducer } = createSlice({
    name: "player",
    initialState,
    reducers: {
        setIsPlaying(state) {
            state.isPlaying = !state.isPlaying;
        },
    },
});

export const { setIsPlaying } = actions;

export default playerReducer;
