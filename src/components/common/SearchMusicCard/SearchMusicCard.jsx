import styles from "./SearchMusicCard.module.css";

function SearchMusicCard({ playlistTitle, playlistImg, background = "" }) {
	return (
		<div
			style={{ background: background }}
			className={styles.SearchMusicCard}
		>
			<img src={playlistImg} alt="cover" />
			<span>{playlistTitle}</span>
		</div>
	);
}

export default SearchMusicCard;
