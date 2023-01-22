import { initialGenres } from "../../../audioclips/initialGenres/initialGenres";
import SearchMusicCard from "../../../components/common/SearchMusicCard/SearchMusicCard";
import Header from "../../../components/Header/Header";
import styles from "./Search.module.css";

function Search() {
	return (
		<div className={styles.wrapper}>
			<Header background="#121212" />
			<h2>Browse all</h2>
			<div className={styles.searchContainer}>
				{initialGenres.map((genre) => (
					<SearchMusicCard {...genre} />
				))}
			</div>
		</div>
	);
}

export default Search;
