import { useState } from "react";
import { BiTime } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectCurrentPlaylist, selectGenres } from "../../../redux/selectors";
import GenreBlock from "../GenreBlock/index";
import MusicCardPlayButton from "../MusicCardPlayButton";
import Separator from "../Separator";
import Tooltip from "../Tooltip";
import TrackListRow from "../TrackListRow/index";
import styles from "./TrackList.module.css";

const TrackList = () => {
    const [isSelected, setIsSelected] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const genres = useSelector(selectGenres);
    const currentPlaylist = useSelector(selectCurrentPlaylist);

    const toggleBackground = (i: number) => {
        setIsSelected(i);
        setIsActive((prev) => !prev);
    };

    return (
        <div
            style={{ background: "linear-gradient(#1C1632, #121212)" }}
            className={styles.wrapper}
        >
            <div className={styles.playlistActionBtns}>
                <MusicCardPlayButton />
            </div>
            <div className={styles.infoTitleBlock}>
                <div>
                    <span>#</span>
                    <span>title</span>
                </div>
                <Tooltip text="duration">
                    <BiTime />
                </Tooltip>
            </div>
            <Separator margin="5px 0 20px" />
            {currentPlaylist.tracks.map((track: any, index: number) => (
                <TrackListRow
                    key={track.id}
                    onClick={() => toggleBackground(index)}
                    isActive={isSelected === index && isActive && styles.active}
                    index={index + 1}
                    {...track}
                />
            ))}
            <Separator margin="80px 0px" />

            {genres &&
                genres.map((genre: any) => (
                    <div key={genre.id}>
                        <GenreBlock
                            to="/playlist/tracks"
                            playlists={genre.playlists}
                            title={genre.title}
                            linkTitle="see discography"
                        />
                    </div>
                ))}
        </div>
    );
};

export default TrackList;
