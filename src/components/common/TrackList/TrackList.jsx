// import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BiTime } from "react-icons/bi";
// import LikeButton from "./../../../components/common/LikeButton/LikeButton";
import MusicCardPlayButton from "../../../components/common/MusicCardPlayButton";
import GenreBlock from "./../../../components/common/GenreBlock/index";

import Tooltip from "../../../components/common/Tooltip";
import TrackListRow from "./../TrackListRow/index";
import Separator from "../Separator";
import { useSelector } from "react-redux";
import { selectGenres } from "../../../redux/selectors";
import { selectCurrentPlaylist } from "./../../../redux/selectors";
import styles from "./TrackList.module.css";

const TrackList = () => {
	const [isSelected, setIsSelected] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const genres = useSelector(selectGenres);
	const currentPlaylist = useSelector(selectCurrentPlaylist);
	console.log("tracks: ", currentPlaylist);

	const toggleBackground = (i) => {
		setIsSelected(i);
		setIsActive((prev) => !prev);
	};

	return (
		<div
			style={{ background: "linear-gradient(#1C1632, #121212)" }}
			className={styles.wrapper}
		>
			<div className={styles.playlistActionBtns}>
				<MusicCardPlayButton genres={genres} />
				{/* <LikeButton
					onClick={() => setIsLiked((prev) => !prev)}
					isLiked={isLiked}
					size="35px"
				/> */}
			</div>
			<div className={styles.infoTitleBlock}>
				<div>
					<span>#</span>
					<span>title</span>
				</div>
				{/* <span>album</span> */}
				<Tooltip text="duration">
					<BiTime />
				</Tooltip>
			</div>
			<Separator margin="5px 0 20px" />
			{currentPlaylist.tracks.map((track, index) => (
				<TrackListRow
					key={track.id}
					onClick={() => toggleBackground(index)}
					isActive={isSelected === index && isActive && styles.active}
					index={index + 1}
					{...track}
				/>
			))}
			<Separator margin="80px 0px" />
			{/*
			<div className={styles.songData}>
				<span>August 5, 2022</span>
				<div className={styles.songCopyright}>
					<span>© 2022 FAAAYKE</span>
					<span>© 2022 FAAAYKE</span>
				</div>
			</div> */}
			{genres &&
				genres.map((genre) => (
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
