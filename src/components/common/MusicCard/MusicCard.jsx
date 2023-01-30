import { NavLink } from "react-router-dom";
import MusicCardPlayButton from "../MusicCardPlayButton";
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
						genres={playlist}
					/>
				)}
			</>
			<span>{playlistName}</span>
			<p>{playlistDescription}</p>
		</div>
	);
}

export default MusicCard;
