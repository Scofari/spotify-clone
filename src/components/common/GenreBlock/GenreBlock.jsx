import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MusicCard from "../MusicCard";
import styles from "./GenreBlock.module.css";
import Skeleton from "./../MusicCard/Skeleton";

function GenreBlock({ linkTitle = "", title = "", playlists = [] }) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (playlists) return setIsLoading(false);
	}, [playlists]);

	return (
		<section className={styles.genreBlock}>
			<div className={styles.titleBlock}>
				<h2>{title}</h2>
				<NavLink>{linkTitle}</NavLink>
			</div>
			<div className={styles.gridContainer}>
				{isLoading
					? [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)
					: playlists.map((playlist) => (
							<MusicCard
								to="/playlist/tracks"
								key={playlist.id}
								playlist={playlist}
								playlistName={playlist.playlistName}
								playlistDescription={
									playlist.playlistDescription
								}
								tracks={playlist.tracks}
								playlistCover={playlist.playlistCover}
							/>
					  ))}
			</div>
		</section>
	);
}

export default GenreBlock;
