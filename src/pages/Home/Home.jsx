import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm } from "../../redux/selectors";
import GenreBlock from "../../components/common/GenreBlock/GenreBlock";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import axios from "axios";

const Home = () => {
    const searchTerm = useSelector(selectSearchTerm);
    const [isLoading, setIsLoading] = useState(true);
    const [genres, setGenres] = useState([]);

    const dispatch = useDispatch();

    const URL_PLAYLISTS =
        "https://63ce4f4c6d27349c2b6afb94.mockapi.io/playlists";

    useEffect(() => {
        setIsLoading(true);
        axios.get(URL_PLAYLISTS).then((res) => {
            setGenres(res.data);
            setIsLoading(false);
        });
    }, []);

    // useEffect(() => {
    //     if (!searchTerm.length) {
    //         setGenres(initialGenres);
    //     }

    //     const filteredGenres = initialGenres.reduce((acc, genre) => {
    //         const filteredGenre = genre.playlists.filter((playlist) =>
    //             playlist.playlistName
    //                 .toLowerCase()
    //                 .includes(searchTerm.toLowerCase())
    //         );

    //         return filteredGenre.length
    //             ? [...acc, { ...genre, playlists: filteredGenre }]
    //             : acc;
    //     }, []);

    //     setGenres(filteredGenres);
    // }, [searchTerm]);

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
