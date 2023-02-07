import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentPlaylist } from "./../../../redux/selectors";
import { likeCover } from "./../../../assets/assorti/index";
import styles from "./HeaderMusicBlock.module.css";

const HeaderMusicBlock = ({
	likes,
	songTitle,
	avatarName = "",
	iconPencil: IconPencil,
	iconMusic: IconMusic,
	background = "",
}) => {
	const currentPlaylist = useSelector(selectCurrentPlaylist);
	const { id, playlistCover, playlistDescription, playlistName, tracks } =
		currentPlaylist;

	const length = tracks.length;

	return (
		<div style={{ background: background }} className={styles.wrapper}>
			<div className={styles.playlistInfo}>
				<div className={`${styles.playlistCover}`}>
					{IconPencil && IconMusic ? (
						<>
							<IconMusic className={`${styles.icon} `} />
							<IconPencil className={`${styles.icon}`} />
							<span className={`${styles.icon}`}>
								Choose photo
							</span>
						</>
					) : (
						<img src={playlistCover || likeCover} alt="cover" />
					)}
				</div>
				<div className={styles.playlistInfoText}>
					<h2>{tracks ? "Playlist" : "Single"}</h2>
					<h1>{songTitle || playlistName}</h1>
					<div className={styles.playlistInfoTextDetails}>
						<img
							className={styles.playlistAvatarArtist}
							src={playlistCover || likeCover}
							alt="cover"
						/>
						{avatarName && <Link>{playlistDescription}</Link>}
						{likes && <span>{`${likes} likes`}</span>}
						{<span>{`${length} songs`}</span>}{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMusicBlock;
