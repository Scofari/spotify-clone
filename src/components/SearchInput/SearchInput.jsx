import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { setSearchTerm } from "../../redux/playlistsSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchInput.module.css";

function SearchInput({ className, placeholder }) {
	const dispatch = useDispatch();
	const searchTerm = useSelector((state) => state.playlists.searchTerm);

	const clearInput = () => dispatch(setSearchTerm({ searchTerm: "" }));

	return (
		<div className={`${styles.searchInput}`}>
			<FiSearch />
			<input
				value={searchTerm}
				placeholder={placeholder}
				type="search"
				onChange={(e) =>
					dispatch(setSearchTerm({ searchTerm: e.target.value }))
				}
			/>
			{searchTerm && <GrClose onClick={clearInput} />}
		</div>
	);
}

export default SearchInput;
