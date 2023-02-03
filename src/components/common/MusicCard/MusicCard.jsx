import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MusicCardPlayButton from "../MusicCardPlayButton";
import { setCurrentPlayingId, setIsPlaying } from "../../../redux/playerSlice";
import { setCurrentPlaylist } from "../../../redux/playlistsSlice";
import {
	selectCurrentPlayingId,
	selectCurrentPlaylist,
	selectIsPlaying,
	selectPlaylists,
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
		console.log("currentPlayingId: ", currentPlayingId);
		console.log("id: ", id);

		return currentPlayingId === id;
	});

	console.log("currentIsPlaying: ", currentIsPlaying);

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
