import { useState } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import LikeButton from "../LikeButton/LikeButton";
import { selectIsPlaying } from "../../../redux/selectors";
import styles from "./TrackListRow.module.css";

const TrackListRow = ({
	id,
	index,
	cover,
	author,
	title,
	isActive,
	onClick,
}) => {
	const isPlaying = useSelector(selectIsPlaying);
	const [isLiked, setIsLiked] = useState(false);

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
							<h4>{title}</h4>
							<span>{author}</span>
						</div>
					</div>
				</div>
				<div className={styles.songDuration}>
					<LikeButton
						onClick={() => setIsLiked((prev) => !prev)}
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
