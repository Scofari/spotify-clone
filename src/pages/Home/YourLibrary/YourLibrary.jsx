import { RiMusic2Line } from "react-icons/ri";
import MusicCard from "../../../components/common/MusicCard";
import Header from "../../../components/Header";
import styles from "./YourLibrary.module.css";

function YourLibrary() {
	return (
		<div className={styles.wrapper}>
			<Header background="#121212" />
			<h1>Playlist</h1>
			<div className={styles.libraryContainer}>
				<MusicCard
					height="270px"
					playlistTitle="My Playlist#1"
					playlistText="by Vladimir Scofari"
					icon={RiMusic2Line}
				/>
				<MusicCard
					height="270px"
					playlistTitle="My Playlist#1"
					playlistText="by Vladimir Scofari"
					icon={RiMusic2Line}
				/>
				<MusicCard
					height="270px"
					playlistTitle="My Playlist#1"
					playlistText="by Vladimir Scofari"
					icon={RiMusic2Line}
				/>
				<MusicCard
					height="270px"
					playlistTitle="My Playlist#1"
					playlistText="by Vladimir Scofari"
					icon={RiMusic2Line}
				/>
				<MusicCard
					height="270px"
					playlistTitle="My Playlist#1"
					playlistText="by Vladimir Scofari"
					icon={RiMusic2Line}
				/>
				<MusicCard
					height="270px"
					playlistTitle="My Playlist#1"
					playlistText="by Vladimir Scofari"
					icon={RiMusic2Line}
				/>
				<MusicCard
					height="270px"
					playlistTitle="My Playlist#1"
					playlistText="by Vladimir Scofari"
					icon={RiMusic2Line}
				/>
				<MusicCard
					height="270px"
					playlistTitle="My Playlist#1"
					playlistText="by Vladimir Scofari"
					icon={RiMusic2Line}
				/>
			</div>
		</div>
	);
}

export default YourLibrary;
