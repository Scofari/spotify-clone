import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HeaderMusicBlock from "../../../components/common/HeaderMusicBlock";
import TrackList from "../../../components/common/TrackList";
import { setHeaderBackground } from "../../../redux/defaultSlice";
import styles from "./Playlist.module.css";

function Playlist() {
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
				blockTitle="Playlist"
				songTitle="Liked Songs"
				avatarName="Vova Scofari"
				title="Liked Songs"
				background="linear-gradient(#3B2A73, #121212)"
			/>
			<TrackList />
		</div>
	);
}

export default Playlist;
