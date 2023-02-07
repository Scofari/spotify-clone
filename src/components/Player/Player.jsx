import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { RiRepeat2Fill, RiRepeatOneFill } from "react-icons/ri";
import { TiArrowShuffle } from "react-icons/ti";
import useAudioplayer, { REPEAT_MODES } from "../../hooks/useAudioplayer";
import IconButton from "../common/IconButton";
import VolumeBar from "../VolumeBar";
import PlaybackBar from "../PlaybackBar";
import LikeButton from "../common/LikeButton";
import Tooltip from "../common/Tooltip";
import styles from "./Player.module.css";

const Player = ({ currentPlaylist }) => {
	const {
		isLoaded,
		currentTrack,
		props,
		duration,
		setIsPlaying,
		isPlaying,
		onNext,
		onPrev,
		currentTime,
		onChangeCurrentTime,
		volume,
		onChangeVolume,
		isMuted,
		onMute,
		repeatMode,
		onChangeRepeatMode,
		isShuffle,
		enableShuffling,
		setNewPlaylist,
		setCurrentTrackIndex,
	} = useAudioplayer();

	const dispatch = useDispatch();
	const [isLiked, setIsLiked] = useState(false);

	const onClickPlay = () => {
		dispatch(setIsPlaying(true));
	};

	useEffect(() => {
		if (currentPlaylist) {
			setNewPlaylist(currentPlaylist.tracks);
			dispatch(setIsPlaying(true));
			setCurrentTrackIndex(0);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPlaylist]);

	useEffect(() => {
		document.addEventListener("keydown", playOnKeyDown);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const playOnKeyDown = (e) => {
		if (e.key === " " && e.target.nodeName !== "INPUT") {
			e.preventDefault();
			dispatch(setIsPlaying(true));
		}
	};

	return (
		<footer className={styles.footerPlayer}>
			{currentTrack && (
				<>
					<audio
						autoPlay
						className={styles.audio}
						src={currentTrack.sound}
						controls
						type="audio/mp3"
						{...props}
					/>

					<div className={styles.trackInfo}>
						<img src={currentTrack.cover} alt="cover" />
						<div className={styles.trackDescription}>
							<h4>{currentTrack.title}</h4>
							<p>{currentTrack.author}</p>
						</div>
						<LikeButton
							isLiked={isLiked}
							size="20px"
							onClick={() => setIsLiked((prev) => !prev)}
						/>
					</div>
				</>
			)}
			<div className={styles.playerControls}>
				<div className={styles.playerControlsButtons}>
					<Tooltip
						text={!isShuffle ? "Enable shuffle" : "Disable shuffle"}
					>
						<IconButton
							icon={TiArrowShuffle}
							onClick={enableShuffling}
							isHighlighted={isShuffle}
						/>
					</Tooltip>
					<Tooltip text="Previous">
						<IconButton icon={GiPreviousButton} onClick={onPrev} />
					</Tooltip>

					<Tooltip text={isPlaying ? "Pause" : "Play"}>
						<IconButton
							onClick={() => onClickPlay()}
							isHoverable
							isActive
							size="40px"
							disabled={!isLoaded}
							icon={
								isPlaying ? AiFillPauseCircle : AiFillPlayCircle
							}
						/>
					</Tooltip>
					<Tooltip text="Next">
						<IconButton icon={GiNextButton} onClick={onNext} />
					</Tooltip>
					<Tooltip text={repeatMode.tooltipText}>
						<IconButton
							isHighlighted={repeatMode.isActive}
							icon={
								repeatMode.value ===
								REPEAT_MODES.REPEAT_ONE.value
									? RiRepeatOneFill
									: RiRepeat2Fill
							}
							onClick={onChangeRepeatMode}
						/>
					</Tooltip>
				</div>

				<PlaybackBar
					isPlaying={isPlaying}
					duration={duration}
					currentTime={currentTime}
					setCurrentTime={onChangeCurrentTime}
					audioRef={props.ref}
				/>
			</div>
			<VolumeBar
				volume={volume}
				onChangeVolume={onChangeVolume}
				isMuted={isMuted}
				onMute={onMute}
			/>
		</footer>
	);
};

export default Player;
