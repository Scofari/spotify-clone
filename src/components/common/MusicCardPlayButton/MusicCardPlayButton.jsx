import styles from "./MusicCardPlayButton.module.css";

function MusicCardPlayButton({ icon: Icon, size = 60, className, onClick }) {
	return (
		<span className={`${styles.button} ${className}`} onClick={onClick}>
			<Icon style={{ fontSize: size }} />
		</span>
	);
}

export default MusicCardPlayButton;
