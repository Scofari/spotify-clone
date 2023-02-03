import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGenres } from "../../redux/selectors";
import GenreBlock from "../../components/common/GenreBlock/GenreBlock";
import { fetchGenres } from "../../redux/playlistsSlice";
import { selectStatus } from "./../../redux/selectors";
import styles from "./Home.module.css";

const Home = () => {
	const dispatch = useDispatch();
	const status = useSelector(selectStatus);
	const genres = useSelector(selectGenres);

	useEffect(() => {
		const fetchData = async () => {
			dispatch(fetchGenres());
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.home}>
			{status === "error" ? (
				<div>
					<h2>Something went wrong 😕</h2>
					<p>Sorry, no playlists found.</p>
					<span> Please, try again later</span>
				</div>
			) : (
				genres.map((genre) => (
					<GenreBlock
						key={genre.id}
						title={genre.title}
						playlists={genre.playlists}
						linkTitle="show all"
					/>
				))
			)}
		</div>
	);
};

export default Home;
