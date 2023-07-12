import { useEffect } from "react";
import { useSelector } from "react-redux";
import GenreBlock from "../../components/common/GenreBlock/GenreBlock";
import { fetchGenres } from "../../redux/playlistsSlice";
import { selectGenres, selectStatus } from "../../redux/selectors";
import { useAppDispatch } from "../../redux/store";
import styles from "./Home.module.css";

const Home = () => {
    const dispatch = useAppDispatch();
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
