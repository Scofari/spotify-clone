import { RootState } from "./store";

export const selectGenres = (state: RootState) => state.playlists.genres;
export const selectPlaylists = (state: RootState) => state.playlists.playlists;
export const selectCurrentPlaylist = (state: any) =>
    state.playlists.currentPlaylist;
export const selectStatus = (state: RootState) => state.playlists.status;
export const selectIsPlaying = (state: RootState) => state.player.isPlaying;
export const selectCurrentPlayingId = (state: RootState) =>
    state.player.currentPlayingId;
export const selectSearchTerm = (state: RootState) => state.default.searchTerm;
export const selectHeaderBackground = (state: RootState) =>
    state.default.headerBackground;
