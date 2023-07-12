import { Genres, Playlists } from "./../@types/index";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Tracks } from "../@types";
import alanWalker from "../audioclips/Pop/alanWalker.json";

export const fetchGenres = createAsyncThunk<Genres[]>(
    "genres/fetchGenresStatus",
    async () => {
        const { data } = await axios.get<Genres[]>(
            "https://63ce4f4c6d27349c2b6afb94.mockapi.io/playlists"
        );
        return data;
    }
);

type CurrentPlaylist = {
    tracks: Tracks[];
};

enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

interface PlaylistSliceState {
    status: Status;
    currentPlaylist: CurrentPlaylist;
    genres: Genres[];
    playlists: Playlists[];
}

const initialState: PlaylistSliceState = {
    status: Status.LOADING,
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
        setCurrentPlaylist(state, action: PayloadAction<Playlists>) {
            state.currentPlaylist = action.payload;
        },
        setGenres(state, action: PayloadAction<Genres[]>) {
            state.genres = action.payload;
        },
        setPlaylists(state, action: PayloadAction<Playlists[]>) {
            state.playlists = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchGenres.pending, (state) => {
            state.status = Status.LOADING;
            state.genres = [];
        });

        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchGenres.rejected, (state) => {
            state.status = Status.ERROR;
            state.genres = [];
        });
    },
});

export const { setCurrentPlaylist, setPlaylists } = actions;

export default playlistsReducer;
