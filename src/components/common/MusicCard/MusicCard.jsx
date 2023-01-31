import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import MusicCardPlayButton from "../MusicCardPlayButton";
import { setIsPlaying } from "../../../redux/playerSlice";
import { setCurrentPlaylist } from "../../../redux/playlistsSlice";
import {
    selectCurrentPlayingId,
    selectIsPlaying,
} from "../../../redux/selectors";
import styles from "./MusicCard.module.css";

function MusicCard({
    playlist = {},
    icon: Icon,
    height = "",
    to = "",
    playlistName,
    playlistDescription,
    tracks,
    playlistCover,
}) {
    const dispatch = useDispatch();
    const isPlaying = useSelector(selectIsPlaying);
    const currentId = useSelector(selectCurrentPlayingId);

    const onClickPlay = () => {
        dispatch(setCurrentPlaylist(playlist));
        dispatch(setIsPlaying(true));
    };

    const currentIsPlaying = tracks.find(({ id }) => currentId === id);

    return (
        <div style={{ height: height }} className={styles.musicCard}>
            <NavLink to={to}>
                {playlistCover && <img src={playlistCover} alt="cover" />}
                {Icon && <Icon />}
            </NavLink>
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
