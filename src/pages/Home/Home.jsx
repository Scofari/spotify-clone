import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm } from "../../redux/selectors";
import GenreBlock from "../../components/common/GenreBlock/GenreBlock";
import Header from "../../components/Header/Header";
import { initialGenres } from "../../audioclips/initialGenres/initialGenres";

import styles from "./Home.module.css";

const Home = () => {
	const [genres, setGenres] = useState([]);
	const searchTerm = useSelector(selectSearchTerm);

	useEffect(() => {
		if (!searchTerm.length) {
			setGenres(initialGenres);
		}

		const filteredGenres = initialGenres.reduce((acc, genre) => {
			const filteredGenre = genre.playlists.filter((playlist) =>
				playlist.playlistName
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
			);

			return filteredGenre.length
				? [...acc, { ...genre, playlists: filteredGenre }]
				: acc;
		}, []);

		setGenres(filteredGenres);
	}, [searchTerm]);

	return (
		<div className={styles.home}>
			<Header background="#121212" />
			{genres.length ? (
				genres.map((genre) => (
					<GenreBlock
						key={genre.id}
						title={genre.title}
						playlists={genre.playlists}
						linkTitle="show all"
					/>
				))
			) : (
				<div>
					<h2>No results found for "{searchTerm}"</h2>
					<p>
						Please make sure your words are spelled correctly or use
						less or different keywords.
					</p>
				</div>
			)}
		</div>
	);
};

export default Home;
