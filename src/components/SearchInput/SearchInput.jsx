import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { setSearchTerm } from "../../redux/defaultSlice";
import { selectSearchTerm } from "../../redux/selectors";
import styles from "./SearchInput.module.css";

function SearchInput({ className, placeholder }) {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    const inputRef = useRef();

    const onClickClearInput = () => {
        dispatch(setSearchTerm({ searchTerm: "" }));
        inputRef.current.focus();
    };

    return (
        <div className={`${styles.searchInput}`}>
            <FiSearch />
            <input
                ref={inputRef}
                value={searchTerm}
                placeholder={placeholder}
                type="search"
                onChange={(e) =>
                    dispatch(setSearchTerm({ searchTerm: e.target.value }))
                }
            />
            {searchTerm && <GrClose onClick={onClickClearInput} />}
        </div>
    );
}

export default SearchInput;
