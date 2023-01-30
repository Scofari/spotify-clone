import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectSearchTerm } from "../../redux/selectors";
import GenreBlock from "../../components/common/GenreBlock/GenreBlock";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";

const Home = () => {
	const searchTerm = useSelector(selectSearchTerm);
	const [genres, setGenres] = useState([]);
	console.log("home genres: ", genres);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(
					"https://63ce4f4c6d27349c2b6afb94.mockapi.io/playlists"
				);
				setGenres(data);
			} catch (error) {
				console.log("error: ", error.message);
			}
		};
		fetchData();
	}, []);

	return (
		<div className={styles.home}>
			<Header />
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
					<h2>No genres</h2>
				</div>
			)}
		</div>
	);
};

export default Home;
