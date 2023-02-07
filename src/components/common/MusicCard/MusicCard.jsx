import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MusicCardPlayButton from "../MusicCardPlayButton";
import { setIsPlaying } from "../../../redux/playerSlice";
import { setCurrentPlaylist } from "../../../redux/playlistsSlice";
import {
	selectCurrentPlayingId,
	selectCurrentPlaylist,
	selectIsPlaying,
} from "../../../redux/selectors";
import styles from "./MusicCard.module.css";

function MusicCard({
	playlist = {},
	tracks = [],
	icon: Icon = "",
	height = "",
	to = "",
	id,
	playlistName = "",
	playlistDescription = "",
	playlistCover = "",
}) {
	const dispatch = useDispatch();
	const isPlaying = useSelector(selectIsPlaying);
	const currentPlaylist = useSelector(selectCurrentPlaylist);
	const currentPlayingId = useSelector(selectCurrentPlayingId);

	const onClickPlay = () => {
		dispatch(setCurrentPlaylist(playlist));
		dispatch(setIsPlaying(true));
	};

	const currentIsPlaying = currentPlaylist.tracks.find(({ id }) => {
		return currentPlayingId !== id;
	});

	return (
		<div style={{ height: height }} className={styles.musicCard}>
			<Link
				onClick={() => dispatch(setCurrentPlaylist(playlist))}
				to={to}
			>
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
