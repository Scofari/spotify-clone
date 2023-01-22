import { SlOptions } from "react-icons/sl";
import Tooltip from "../Tooltip";

import styles from "./OptionsButton.module.css";

const OptionsButton = ({ onClick }) => {
	return (
		<Tooltip text="More options for My Playlist">
			<button
				// onClick={onClick}
				className={styles.optionsButton}
			>
				<SlOptions />
			</button>
		</Tooltip>
	);
};

export default OptionsButton;
