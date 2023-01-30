import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchMusicCard from "../../../components/common/SearchMusicCard/SearchMusicCard";
import { selectSearchTerm } from "../../../redux/selectors";
import styles from "./Search.module.css";

function Search() {
	const searchTerm = useSelector(selectSearchTerm);
	const [genres, setGenres] = useState([]);

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
		<div className={styles.wrapper}>
			<h2>Browse all</h2>
			<div className={styles.searchContainer}>
				{genres
					.filter(
						({ title }) =>
							!searchTerm ||
							title
								.toLowerCase()
								.includes(searchTerm.toLowerCase())
					)
					.map((genre) => (
						<SearchMusicCard key={genre.id} {...genre} />
					))}
			</div>
		</div>
	);
}

export default Search;
