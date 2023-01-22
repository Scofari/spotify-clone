import { NavLink } from "react-router-dom";

import { BiTime } from "react-icons/bi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import LikeButton from "./../../../components/common/LikeButton/LikeButton";
import MusicCardPlayButton from "../../../components/common/MusicCardPlayButton";

// import { setCurrentPlaylist } from "../../../redux/playlistsSlice";
import { selectIsPlaying } from "../../../redux/selectors";
import Tooltip from "../../../components/common/Tooltip";
import GenreBlock from "./../../../components/common/GenreBlock/index";
import { vovaScofariTracks as genres } from "./../../../audioclips/vovaScofariTracks";
import HeaderMusicBlock from "../../../components/common/HeaderMusicBlock/HeaderMusicBlock";
import styles from "./Playlist.module.css";

function Playlist() {
	// const dispatch = useDispatch();
	const isPlaying = useSelector(selectIsPlaying);

	return (
		<div className={styles.playlist}>
			{genres.length &&
				genres.map((genre) => (
					<>
						<HeaderMusicBlock
							cover={genre.tracks[0].playlistCover}
						/>
						<div className={styles.playlistActionBtns}>
							<MusicCardPlayButton
								icon={
									isPlaying
										? AiFillPauseCircle
										: AiFillPlayCircle
								}
								size="140px"
								// onClick={() =>
								// 	dispatch(setCurrentPlaylist({ id, tracks, isPlaying }))
								// }
							/>
							<LikeButton size="35px" />
						</div>
						<div className={styles.infoTrackContainer}>
							<div className={styles.infoTitleBlock}>
								<span>#</span>
								<span>title</span>
							</div>
							<Tooltip text="duration">
								<BiTime />
							</Tooltip>
						</div>

						<div className={styles.trackListRow}>
							<div className={styles.trackListPlayButton}>
								<span>1</span>
								<button>
									<BsFillPlayFill size={25} />
								</button>
								<div className={styles.songInfo}>
									<span>На чиле</span>
									<p>Vova Scofari</p>
								</div>
							</div>
							<div className={styles.songDuration}>
								<LikeButton size="15px" />
								<span>2:05</span>
							</div>
						</div>

						<div className={styles.songData}>
							<span>August 5, 2022</span>
							<div className={styles.songCopyright}>
								<span>© 2022 FAAAYKE</span>
								<span>© 2022 FAAAYKE</span>
							</div>
						</div>

						<div>
							<GenreBlock
								playlists={genre.tracks}
								key={genre.id}
								// playlists={genre.playlists}
								title="More by Vova Scofari"
								linkTitle="see discography"
							/>
						</div>
					</>
				))}
			<footer className={styles.footer}></footer>
		</div>
	);
}

export default Playlist;
