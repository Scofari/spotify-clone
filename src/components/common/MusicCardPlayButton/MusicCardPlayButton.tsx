import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import styles from "./MusicCardPlayButton.module.css";

interface MusicCardPlayButtonProps {
    onClick?: () => void;
    className?: string;
    isPlaying?: boolean;
}

function MusicCardPlayButton({
    onClick,
    className,
    isPlaying,
}: MusicCardPlayButtonProps) {
    return (
        <span className={`${styles.button} ${className}`} onClick={onClick}>
            {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </span>
    );
}

export default MusicCardPlayButton;
