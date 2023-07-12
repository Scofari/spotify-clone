import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerSliceState {
    isPlaying: boolean;
    isLiked: boolean;
    currentPlayingId: null | number;
}

const initialState: PlayerSliceState = {
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
        setCurrentPlayingId(state, action: PayloadAction<number>) {
            state.currentPlayingId = action.payload;
        },
    },
});

export const { setIsPlaying, setIsLiked, setCurrentPlayingId } = actions;

export default playerReducer;
