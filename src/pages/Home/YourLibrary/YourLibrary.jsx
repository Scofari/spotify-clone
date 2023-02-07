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
					playlistDescription="by Spotify"
					icon={RiMusic2Line}
					tracks={false}
				/>
			</div>
		</div>
	);
}

export default YourLibrary;
