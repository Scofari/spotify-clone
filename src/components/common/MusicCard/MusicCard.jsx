import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { setCurrentPlaylist } from "../../../redux/playlistsSlice";
import { selectIsPlaying } from "../../../redux/selectors";
import MusicCardPlayButton from "../MusicCardPlayButton";
import styles from "./MusicCard.module.css";

function MusicCard({
	playlistTitle,
	playlistText,
	tracks,
	id,
	playlistCover,
	icon: Icon,
	height = "",
	to,
}) {
	const dispatch = useDispatch();
	const isPlaying = useSelector(selectIsPlaying);

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
						icon={isPlaying ? AiFillPauseCircle : AiFillPlayCircle}
						size="60px"
						onClick={() =>
							dispatch(
								setCurrentPlaylist({ id, tracks, isPlaying })
							)
						}
					/>
				)}
			</>
			<span>{playlistTitle}</span>
			<p>{playlistText}</p>
		</div>
	);
}

export default MusicCard;
