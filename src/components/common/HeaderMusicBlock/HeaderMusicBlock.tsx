import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentPlaylist } from "../../../redux/selectors";
import { likeCover } from "../../../assets/assorti/index";
import styles from "./HeaderMusicBlock.module.css";
import { IconType } from "react-icons/lib";
import { CurrentPlaylist } from "../../../@types";

interface HeaderMusicBlockProps {
    songTitle: string;
    background: string;
    avatarName?: string;
    likes?: number;
    iconPencil?: IconType;
    iconMusic?: IconType;
}

const HeaderMusicBlock: React.FC<HeaderMusicBlockProps> = ({
    songTitle = "",
    avatarName = "",
    background = "",
    likes,
    iconPencil,
    iconMusic,
}) => {
    const IconPencil = iconPencil;
    const IconMusic = iconMusic;
    const currentPlaylist = useSelector(selectCurrentPlaylist);
    const { playlistCover, playlistDescription, playlistName, tracks } =
        currentPlaylist;

    const length = tracks.length;

    return (
        <div style={{ background: background }} className={styles.wrapper}>
            <div className={styles.playlistInfo}>
                <div className={`${styles.playlistCover}`}>
                    {!!IconPencil && IconMusic ? (
                        <>
                            <IconMusic className={`${styles.icon} `} />
                            <IconPencil className={`${styles.icon}`} />
                            <span className={`${styles.icon}`}>
                                Choose photo
                            </span>
                        </>
                    ) : (
                        <img src={playlistCover || likeCover} alt="cover" />
                    )}
                </div>
                <div className={styles.playlistInfoText}>
                    <h2>{tracks ? "Playlist" : "Single"}</h2>
                    <h1>{songTitle || playlistName}</h1>
                    <div className={styles.playlistInfoTextDetails}>
                        <img
                            className={styles.playlistAvatarArtist}
                            src={playlistCover || likeCover}
                            alt="cover"
                        />
                        {avatarName && <a href="#">{playlistDescription}</a>}
                        {likes && <span>{`${likes} likes`}</span>}
                        {<span>{`${length} songs`}</span>}{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMusicBlock;
