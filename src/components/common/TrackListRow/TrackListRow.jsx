import { NavLink } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import LikeButton from "../LikeButton/LikeButton";

import { selectIsPlaying } from "../../../redux/selectors";
// import { vovaScofariTracks as genres } from "../../../audioclips/vovaScofariTracks";
import styles from "./TrackListRow.module.css";
import { useIsLiked } from "./../LikeButton/IsLikedContext";

const TrackListRow = ({
	index,
	cover,
	blockTitle,
	songTitle,
	avatar,
	songs,
	isActive,
	onClick,
}) => {
	const isPlaying = useSelector(selectIsPlaying);
	const { toggleIsLiked, isLiked } = useIsLiked();

	return (
		<div onClick={onClick} className={styles.wrapper}>
			<div className={`${styles.trackListRow} ${isActive}`}>
				<div className={styles.trackListPlayButton}>
					<span>{index}</span>
					<button>
						{isPlaying ? (
							<BsFillPauseFill size={25} />
						) : (
							<BsFillPlayFill size={25} />
						)}
					</button>
					<img src={cover} alt="cover" />
					<div className={styles.trackInfo}>
						<div className={styles.trackDescription}>
							<h4>На чиле</h4>
							<p>Vova Scofari</p>
						</div>
					</div>
				</div>
				<span>Vova Scofari</span>
				<span>1 day ago</span>
				<div className={styles.songDuration}>
					<LikeButton
						onClick={toggleIsLiked}
						isLiked={isLiked}
						size="15px"
					/>
					<span>2:05</span>
				</div>
			</div>
		</div>
	);
};

export default TrackListRow;
