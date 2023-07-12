import { useEffect } from "react";
import HeaderMusicBlock from "../../../components/common/HeaderMusicBlock";
import TrackList from "../../../components/common/TrackList";
import { setHeaderBackground } from "../../../redux/defaultSlice";
import { useAppDispatch } from "../../../redux/store";
import styles from "./LikedSongs.module.css";

function LikedSongs() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setHeaderBackground("#19152A"));
        return () => {
            dispatch(setHeaderBackground("#121212"));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.wrapper}>
            <HeaderMusicBlock
                songTitle="Liked Songs"
                avatarName="Vova Scofari"
                background="linear-gradient(#3B2A73, rgba(42, 30, 82, 1))"
            />
            <TrackList />
        </div>
    );
}

export default LikedSongs;
