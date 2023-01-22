import Tooltip from "../common/Tooltip";
import styles from "./NavigationHeaderButton.module.css";

const NavigationHeaderButton = ({
	icon: Icon,
	disabled = false,
	onClick,
	text = "",
}) => {
	return (
		<>
			<Tooltip position={`${disabled ? "top" : "bottom"}`} text={text}>
				<div
					className={`${
						disabled ? styles.notAllowed : styles.pointer
					}`}
				>
					<button
						className={styles.button}
						onClick={onClick}
						disabled={disabled}
					>
						<Icon />
					</button>
				</div>
			</Tooltip>
		</>
	);
};

export default NavigationHeaderButton;
