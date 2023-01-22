import Tooltip from "../Tooltip";
import styles from "./IconButton.module.css";

const IconButton = ({
	icon: Icon,
	size = 20,
	isHoverable,
	disabled = false,
	onClick,
	title,
	fillMode = "fill",
	isActive = false,
	isHighlighted = false,
}) => {
	return (
		<Tooltip text={title}>
			<button
				disabled={disabled}
				onClick={onClick}
				className={`${styles.iconButton}  ${
					isHoverable ? styles.scale : ""
				} ${isHighlighted ? styles.isHighlighted : ""}`}
			>
				<Icon
					className={`${styles.iconButton} ${styles[fillMode]} ${
						isActive ? styles.active : ""
					} `}
					style={{ fontSize: size }}
				/>
			</button>
		</Tooltip>
	);
};

export default IconButton;
