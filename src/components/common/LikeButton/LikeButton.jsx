import { FiHeart } from "react-icons/fi";
import Tooltip from "../Tooltip";
import styles from "./LikeButton.module.css";

const LikeButton = ({ onClick, isLiked = false, size }) => {
	return (
		<Tooltip
			text={isLiked ? "Remove from Your Library" : "Save to Your Library"}
		>
			<button
				onClick={onClick}
				className={`${styles.likeButton}  ${
					isLiked ? styles.isLiked : ""
				}`}
			>
				<FiHeart size={size} />
			</button>
		</Tooltip>
	);
};

export default LikeButton;
