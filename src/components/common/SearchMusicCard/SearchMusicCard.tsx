import styles from "./SearchMusicCard.module.css";

interface SearchMusicCardProps {
    playlistImg: string;
    background: string;
    title: string;
}

function SearchMusicCard({
    playlistImg,
    background = "",
    title,
}: SearchMusicCardProps) {
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
