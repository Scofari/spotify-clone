import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import styles from "./MusicCardPlayButton.module.css";

function MusicCardPlayButton({ onClick, className, isPlaying }) {
	return (
		<span className={`${styles.button} ${className}`} onClick={onClick}>
			{isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
		</span>
	);
}

export default MusicCardPlayButton;
