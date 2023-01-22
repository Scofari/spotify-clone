import { NavLink } from "react-router-dom";
// import { BiTime } from "react-icons/bi";
// import { useDispatch, useSelector } from "react-redux";

import styles from "./HeaderMusicBlock.module.css";

const HeaderMusicBlock = ({
	cover,
	blockTitle = "Playlist",
	songTitle,
	avatar = "",
	songsNumber,
	likes,
	avatarName = "Vova Scofari",
	iconPencil: IconPencil,
	iconMusic: IconMusic,
	background = "",
}) => {
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
						<img src={cover} alt="cover" />
					)}
				</div>
				<div className={styles.playlistInfoText}>
					<h2>{blockTitle}</h2>
					<h1>{songTitle}</h1>
					<div className={styles.playlistInfoTextDetails}>
						<img
							className={styles.playlistAvatarArtist}
							src={avatar}
							alt="cover"
						/>
						{avatarName && <NavLink>{avatarName}</NavLink>}
						{likes && <span>{`${likes} likes`}</span>}
						{songsNumber && (
							<span>{`${songsNumber} songs`}</span>
						)}{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMusicBlock;
