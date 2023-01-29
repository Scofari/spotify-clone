import { NavLink } from "react-router-dom";
import MusicCard from "../MusicCard";
import styles from "./GenreBlock.module.css";

function GenreBlock({ linkTitle = "", title = "", playlists = [] }) {
    return (
        <section className={styles.genreBlock}>
            <div className={styles.titleBlock}>
                <h2>{title}</h2>
                <NavLink>{linkTitle}</NavLink>
            </div>
            <div className={styles.gridContainer}>
                {playlists.map((playlist) => (
                    <MusicCard
                        to="/playlist/tracks"
                        key={playlist.id}
                        playlist={playlist}
                    />
                ))}
            </div>
        </section>
    );
}

export default GenreBlock;
