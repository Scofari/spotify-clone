import styles from "./SearchMusicCard.module.css";

function SearchMusicCard({ playlistImg, background = "", title }) {
	return (
		<div
			style={{ background: background }}
			className={styles.SearchMusicCard}
		>
			<img src={playlistImg} alt="cover" />
			<span>{title}</span>
		</div>
	);
}

export default SearchMusicCard;
