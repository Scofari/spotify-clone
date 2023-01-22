import Header from "../../../components/Header/Header";
import HeaderMusicBlock from "../../../components/common/HeaderMusicBlock";
import TrackList from "../../../components/common/TrackList";
import { likeCover } from "../../../assets/assorti";
import artist from "../../../assets/artistsImg/vovaScofari.jpg";
// import { vovaScofariTracks as genres } from "../../../audioclips/vovaScofariTracks";
import styles from "./LikedSongs.module.css";

function LikedSongs({ cover = likeCover }) {
	return (
		<div className={styles.wrapper}>
			<Header background="#3B2A73" />
			<HeaderMusicBlock
				cover={cover}
				blockTitle="Playlist"
				songTitle="Liked Songs"
				avatar={artist}
				avatarName="Vova Scofari"
				songsNumber="20"
				title="Liked Songs"
				background="linear-gradient(#3B2A73, rgba(42, 30, 82, 1))"
			/>
			<TrackList background="linear-gradient(#1C1632, #121212" />
		{/* < */}
		</div>
	);
}

export default LikedSongs;
