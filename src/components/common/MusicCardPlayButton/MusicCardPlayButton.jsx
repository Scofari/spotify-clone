import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { selectIsPlaying } from "../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlaylist } from "../../../redux/playlistsSlice";
import { setIsPlaying } from "../../../redux/playerSlice";
import styles from "./MusicCardPlayButton.module.css";

function MusicCardPlayButton({ className, genres }) {
	const isPlaying = useSelector(selectIsPlaying);
	const dispatch = useDispatch();

	const onClickPlay = () => {
		dispatch(setCurrentPlaylist(genres));
		dispatch(setIsPlaying(true));
	};

	return (
		<span className={`${styles.button} ${className}`} onClick={onClickPlay}>
			{isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
		</span>
	);
}

export default MusicCardPlayButton;
