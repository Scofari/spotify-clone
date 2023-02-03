import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import axios from "axios";
import HeaderMusicBlock from "../../../components/common/HeaderMusicBlock";
import TrackList from "../../../components/common/TrackList";
import { setHeaderBackground } from "../../../redux/defaultSlice";
// import { selectCurrentPlaylist } from "./../../../redux/selectors";
import { setCurrentPlaylist } from "../../../redux/playlistsSlice";
import { selectCurrentPlaylist } from "../../../redux/selectors";
import styles from "./Playlist.module.css";

function Playlist() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const currentPlaylist = useSelector(selectCurrentPlaylist);
	// const currentPlaylist = useSelector(selectCurrentPlaylist);

	console.log("id: ", id);

	useEffect(() => {
		dispatch(setHeaderBackground("#19152A"));
		return () => {
			dispatch(setHeaderBackground("#121212"));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// useEffect(() => {
	// 	dispatch(setCurrentPlaylist(currentPlaylist));
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [currentPlaylist]);

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
