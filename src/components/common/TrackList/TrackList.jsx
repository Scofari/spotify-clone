// import { NavLink } from "react-router-dom";

import { BiTime } from "react-icons/bi";
// import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import LikeButton from "./../../../components/common/LikeButton/LikeButton";
import MusicCardPlayButton from "../../../components/common/MusicCardPlayButton";
import GenreBlock from "./../../../components/common/GenreBlock/index";

import { selectIsPlaying } from "../../../redux/selectors";
import Tooltip from "../../../components/common/Tooltip";
import TrackListRow from "./../TrackListRow/index";
import OptionsButton from "./../OptionsButton/index";
import Separator from "../Separator";
import { useIsLiked } from "../LikeButton/IsLikedContext";
import { initialGenres } from "../../../audioclips/initialGenres/initialGenres";
// import { setCurrentPlaylist } from "../../../redux/playlistsSlice";
import styles from "./TrackList.module.css";
import { useState } from "react";

const TrackList = ({
	cover,
	blockTitle,
	songTitle,
	avatar,
	songsNumber,
	songs,
	background = "",
}) => {
	// const dispatch = useDispatch();
	const isPlaying = useSelector(selectIsPlaying);
	const { toggleIsLiked, isLiked } = useIsLiked();
	const [isSelected, setIsSelected] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const toggleBackground = (i) => {
		setIsSelected(i);
		setIsActive((prev) => !prev);
	};

	return (
		<div style={{ background: background }} className={styles.wrapper}>
			<div className={styles.playlistActionBtns}>
				<MusicCardPlayButton
					icon={isPlaying ? AiFillPauseCircle : AiFillPlayCircle}
					size="140px"
					// onClick={() =>
					// 	dispatch(setCurrentPlaylist({ id, tracks, isPlaying }))
					// }
				/>
				<LikeButton
					onClick={toggleIsLiked}
					isLiked={isLiked}
					size="35px"
				/>
				<OptionsButton />
			</div>
			<div className={styles.infoTitleBlock}>
				<div>
					<span>#</span>
					<span>title</span>
				</div>
				<span>album</span>
				<span>date added</span>
				<Tooltip text="duration">
					<BiTime />
				</Tooltip>
			</div>
			<Separator margin="5px 0 20px" />

			{initialGenres.map((genre, index) => (
				<TrackListRow
					key={genre.id}
					onClick={() => toggleBackground(index)}
					isActive={isSelected === index && isActive && styles.active}
					cover={genre.playlists[index].playlistCover}
					index={index + 1}
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

			{songs &&
				songs.map((song) => (
					<div key={song.id}>
						<GenreBlock
							to="/playlist/tracks"
							playlists={song.tracks}
							// playlists={song.playlists}
							title="More by Vova Scofari"
							linkTitle="see discography"
						/>
					</div>
				))}
		</div>
	);
};

export default TrackList;
