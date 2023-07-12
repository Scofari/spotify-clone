import { useMemo } from "react";
import RangeInput from "../common/RangeInput";
import styles from "./PlaybackBar.module.css";

interface PlaybackBarProps {
    duration: number;
    currentTime: number;
    setCurrentTime: () => void;
}

const formatTime = (durationInSeconds: number): string => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = (durationInSeconds - minutes * 60).toString();

    return `${minutes}:${seconds.padStart(2, String(0))}`;
};

const PlaybackBar = ({
    duration = 0,
    currentTime,
    setCurrentTime,
}: PlaybackBarProps) => {
    const formattedDuration = useMemo(() => formatTime(duration), [duration]);
    const formattedCurrentTime = useMemo(
        () => formatTime(currentTime),
        [currentTime]
    );

    return (
        <div className={styles.playbackBar}>
            <span className={styles.playbackDuration}>
                {formattedCurrentTime}
            </span>
            <RangeInput
                value={((currentTime * 100) / duration).toString()}
                step={(100 / duration).toString()}
                onChange={setCurrentTime}
                className={styles.playbackProgressBar}
            />
            <span className={styles.playbackDuration}>{formattedDuration}</span>
        </div>
    );
};

export default PlaybackBar;
