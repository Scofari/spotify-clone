export type Tracks = {
    author: string;
    cover: string;
    id: string;
    sound: string;
    title: string;
};

export type CurrentPlaylist = {
    tracks: Tracks[];
};

export type Playlists = {
    id: string;
    playlistCover: string;
    playlistDescription: string;
    playlistName: string;
    tracks: Tracks[];
};

export type Genres = {
    background: string;
    id: string;
    playlistImg: string;
    playlists: Playlists;
    title: string;
};
