import { FiHeart } from "react-icons/fi";
import Tooltip from "../Tooltip";
import styles from "./LikeButton.module.css";

interface LikeButtonProps {
    onClick: () => void;
    isLiked: boolean;
    size: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({
    onClick,
    isLiked = false,
    size,
}) => {
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
