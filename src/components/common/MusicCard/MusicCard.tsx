import { IconType } from "react-icons/lib";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Playlists, Tracks } from "../../../@types";
import { setIsPlaying } from "../../../redux/playerSlice";
import { setCurrentPlaylist } from "../../../redux/playlistsSlice";
import {
  selectCurrentPlayingId,
  selectCurrentPlaylist,
  selectIsPlaying,
} from "../../../redux/selectors";
import { useAppDispatch } from "../../../redux/store";
import MusicCardPlayButton from "../MusicCardPlayButton";
import styles from "./MusicCard.module.css";

interface MusicCardProps {
  playlist: Playlists;
  playlistName: string;
  playlistDescription: string;
  tracks?: Tracks[] | boolean;
  height?: string;
  to?: string;
  playlistCover?: string;
  icon?: IconType;
}

function MusicCard({
  playlist,
  tracks = [],
  icon,
  height = "",
  to = "",
  playlistName = "",
  playlistDescription = "",
  playlistCover = "",
}: MusicCardProps) {
  const Icon = icon;
  const dispatch = useAppDispatch();
  const isPlaying = useSelector(selectIsPlaying);
  const currentPlaylist = useSelector(selectCurrentPlaylist);
  const currentPlayingId = useSelector(selectCurrentPlayingId);

  const onClickPlay = () => {
    dispatch(setCurrentPlaylist(playlist));
    dispatch(setIsPlaying());
  };

  const currentIsPlaying = currentPlaylist.tracks.find(({ id }: Tracks) => {
    return currentPlayingId !== Number(id);
  });

  return (
    <div style={{ height }} className={styles.musicCard}>
      <Link onClick={() => dispatch(setCurrentPlaylist(playlist))} to={to}>
        {playlistCover && <img src={playlistCover} alt="cover" />}
        {Icon && <Icon />}
      </Link>
      <>
        {tracks && (
          <MusicCardPlayButton
            className={styles.button}
            isPlaying={isPlaying && !!currentIsPlaying}
            onClick={onClickPlay}
          />
        )}
      </>
      <span>{playlistName}</span>
      <p>{playlistDescription}</p>
    </div>
  );
}

export default MusicCard;
