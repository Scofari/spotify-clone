import { RiMusic2Line } from "react-icons/ri";
import MusicCard from "../../../components/common/MusicCard";
import styles from "./YourLibrary.module.css";

function YourLibrary() {
    return (
        <div className={styles.wrapper}>
            <h1>Playlist</h1>
            <div className={styles.libraryContainer}>
                <MusicCard
                    height="270px"
                    playlistName="My Playlist#1"
                    playlistDescription="by Vladimir Scofari"
                    icon={RiMusic2Line}
                />
                {/* <MusicCard
                    height="270px"
                    playlistName="My Playlist#1"
                    playlistDescription="by Vladimir Scofari"
                    icon={RiMusic2Line}
                />
                <MusicCard
                    height="270px"
                    playlistName="My Playlist#1"
                    playlistDescription="by Vladimir Scofari"
                    icon={RiMusic2Line}
                />
                <MusicCard
                    height="270px"
                    playlistName="My Playlist#1"
                    playlistDescription="by Vladimir Scofari"
                    icon={RiMusic2Line}
                />
                <MusicCard
                    height="270px"
                    playlistName="My Playlist#1"
                    playlistDescription="by Vladimir Scofari"
                    icon={RiMusic2Line}
                />
                <MusicCard
                    height="270px"
                    playlistName="My Playlist#1"
                    playlistDescription="by Vladimir Scofari"
                    icon={RiMusic2Line}
                />
                <MusicCard
                    height="270px"
                    playlistName="My Playlist#1"
                    playlistDescription="by Vladimir Scofari"
                    icon={RiMusic2Line}
                />
                <MusicCard
                    height="270px"
                    playlistName="My Playlist#1"
                    playlistDescription="by Vladimir Scofari"
                    icon={RiMusic2Line}
                /> */}
            </div>
        </div>
    );
}

export default YourLibrary;
