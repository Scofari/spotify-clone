import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectGenres } from "../../redux/selectors";
import GenreBlock from "../../components/common/GenreBlock/GenreBlock";
import { setGenres } from "../../redux/playlistsSlice";
import styles from "./Home.module.css";

const Home = () => {
    const genres = useSelector(selectGenres);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    "https://63ce4f4c6d27349c2b6afb94.mockapi.io/playlists"
                );
                dispatch(setGenres(data));
            } catch (error) {
                console.log("error: ", error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.home}>
            {genres.map((genre) => (
                <GenreBlock
                    key={genre.id}
                    title={genre.title}
                    playlists={genre.playlists}
                    linkTitle="show all"
                />
            ))}
        </div>
    );
};

export default Home;
