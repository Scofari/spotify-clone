import { useDispatch } from "react-redux";
import { useEffect } from "react";
import HeaderMusicBlock from "../../../components/common/HeaderMusicBlock";
import TrackList from "../../../components/common/TrackList";
import { likeCover } from "../../../assets/assorti";
import artist from "../../../assets/artistsImg/vovaScofari.jpg";
import { setHeaderBackground } from "../../../redux/defaultSlice";
import styles from "./LikedSongs.module.css";

function LikedSongs({ cover = likeCover }) {
	const dispatch = useDispatch();

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
				cover={cover}
				blockTitle="Playlist"
				songTitle="Liked Songs"
				avatar={artist}
				avatarName="Vova Scofari"
				songsNumber="20"
				title="Liked Songs"
				background="linear-gradient(#3B2A73, rgba(42, 30, 82, 1))"
			/>
			<TrackList />
		</div>
	);
}

export default LikedSongs;
