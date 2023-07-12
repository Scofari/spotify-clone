import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchMusicCard from "../../../components/common/SearchMusicCard/SearchMusicCard";
import { selectSearchTerm } from "../../../redux/selectors";
import { selectGenres } from "../../../redux/selectors";
import styles from "./Search.module.css";

function Search() {
    const searchTerm = useSelector(selectSearchTerm);

    const genres = useSelector(selectGenres);

    return (
        <div className={styles.wrapper}>
            <h2>Browse all</h2>
            <div className={styles.searchContainer}>
                {genres
                    .filter(
                        (genre) =>
                            !searchTerm ||
                            genre.title
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                    )
                    .map((genre) => (
                        <Link to="/" key={genre.id}>
                            <SearchMusicCard {...genre} />
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default Search;
