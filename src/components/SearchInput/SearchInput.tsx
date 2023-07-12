import { useRef } from "react";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { setSearchTerm } from "../../redux/defaultSlice";
import { selectSearchTerm } from "../../redux/selectors";
import { useAppDispatch } from "../../redux/store";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
    placeholder: string;
}

function SearchInput({ placeholder }: SearchInputProps) {
    const dispatch = useAppDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onClickClearInput = () => {
        dispatch(setSearchTerm(""));
        inputRef.current?.focus();
    };

    return (
        <div className={`${styles.searchInput}`}>
            <FiSearch />
            <input
                ref={inputRef}
                value={searchTerm}
                placeholder={placeholder}
                type="search"
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
            {searchTerm && <GrClose onClick={onClickClearInput} />}
        </div>
    );
}

export default SearchInput;
