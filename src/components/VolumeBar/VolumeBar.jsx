import { FiVolumeX, FiVolume1, FiVolume2, FiVolume } from "react-icons/fi";
import IconButton from "../common/IconButton";
import RangeInput from "../common/RangeInput";
import Tooltip from "../common/Tooltip";
import styles from "./VolumeBar.module.css";

const VolumeBar = ({ volume, onChangeVolume, onMute, isMuted }) => {
	const getVolumeIcon = () => {
		if (isMuted) {
			return FiVolumeX;
		}

		if (!isMuted && volume === 0) {
			return FiVolume;
		}

		if (volume < 50) {
			return FiVolume1;
		}

		return FiVolume2;
	};

	return (
		<div className={styles.volumeBar}>
			<Tooltip text={isMuted ? "Unmute" : "Mute"}>
				<IconButton
					fillMode="stroke"
					onClick={onMute}
					icon={getVolumeIcon()}
				/>
			</Tooltip>
			<Tooltip text={isMuted ? "Muted" : `${volume}%`}>
				<RangeInput
					className={styles.volumeBarRange}
					value={isMuted ? 0 : volume}
					onChange={onChangeVolume}
				/>
			</Tooltip>
		</div>
	);
};

export default VolumeBar;
