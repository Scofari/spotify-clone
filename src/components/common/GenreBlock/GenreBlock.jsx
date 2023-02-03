import { Link, useParams } from "react-router-dom";
import MusicCard from "../MusicCard";
import Skeleton from "./../MusicCard/Skeleton";
import { selectStatus } from "../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setPlaylists } from "../../../redux/playlistsSlice";
// import { axios } from "axios";
import styles from "./GenreBlock.module.css";

function GenreBlock({ linkTitle = "", title = "", playlists = [] }) {
	// const [genre, setGenre] = useState();
	const { id } = useParams();
	const dispatch = useDispatch();
	const status = useSelector(selectStatus);
	console.log("playlists: ", playlists);

	useEffect(() => {
		dispatch(setPlaylists(playlists));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [playlists]);

	const skeleton = [...new Array(6)].map((_, idx) => <Skeleton key={idx} />);

	return (
		<section className={styles.genreBlock}>
			<div className={styles.titleBlock}>
				<h2>{title}</h2>
				<Link>{linkTitle}</Link>
			</div>
			<div className={styles.gridContainer}>
				{status === "loading"
					? skeleton
					: playlists.map((playlist) => (
							<MusicCard
								to={`/playlist/${playlist.id}`}
								key={playlist.id}
								playlist={playlist}
								id={playlist.id}
								{...playlist}
							/>
					  ))}
			</div>
		</section>
	);
}

export default GenreBlock;
