import MusicCard from "../MusicCard";
import Skeleton from "../MusicCard/Skeleton";
import { selectStatus } from "../../../redux/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setPlaylists } from "../../../redux/playlistsSlice";
import { useAppDispatch } from "../../../redux/store";
import { Playlists } from "../../../@types";
import styles from "./GenreBlock.module.css";

interface GenreBlockProps {
    to?: string;
    linkTitle: string;
    title: string;
    playlists: Playlists[];
}

function GenreBlock({
    linkTitle = "",
    title = "",
    playlists = [],
}: GenreBlockProps) {
    const dispatch = useAppDispatch();
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(setPlaylists(playlists));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playlists]);

    const skeleton = [...new Array(6)].map((_, idx) => <Skeleton key={idx} />);

    return (
        <section className={styles.genreBlock}>
            <div className={styles.titleBlock}>
                <h2>{title}</h2>
                <a href="#">{linkTitle}</a>
            </div>
            <div className={styles.gridContainer}>
                {status === "loading"
                    ? skeleton
                    : playlists.map((playlist) => (
                          <MusicCard
                              to={`/playlist/${playlist.id}`}
                              key={playlist.id}
                              playlist={playlist}
                              {...playlist}
                          />
                      ))}
            </div>
        </section>
    );
}

export default GenreBlock;
