export const selectGenres = (state) => state.playlists.genres;
export const selectPlaylists = (state) => state.playlists.playlists;
export const selectCurrentPlaylist = (state) => state.playlists.currentPlaylist;
export const selectStatus = (state) => state.playlists.status;
export const selectIsPlaying = (state) => state.player.isPlaying;
export const selectCurrentPlayingId = (state) => state.player.currentPlayingId;
export const selectSearchTerm = (state) => state.default.searchTerm;
export const selectHeaderBackground = (state) => state.default.headerBackground;
