import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsPlaying } from "../redux/selectors";
import { setIsPlaying } from "../redux/playerSlice";

export const REPEAT_MODES = {
	NO_REPEAT: {
		value: "NO_REPEAT",
		isActive: false,
		tooltipText: "Enable repeat",
	},
	REPEAT: {
		value: "REPEAT",
		isActive: true,
		tooltipText: "Enable repeat one",
	},
	REPEAT_ONE: {
		value: "REPEAT_ONE",
		isActive: true,
		tooltipText: "Disable repeat",
	},
};

const useAudioplayer = () => {
	const audioRef = useRef(null);
	const [initialPlaylist, setInitialPlaylist] = useState([]);
	const [playlist, setPlaylist] = useState([]);
	const [repeatMode, setRepeatMode] = useState(REPEAT_MODES.NO_REPEAT);
	const [isLoaded, setIsLoaded] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	const [volume, setVolume] = useState(100);
	const [isMuted, setIsMuted] = useState(false);
	const [isShuffle, setIsShuffle] = useState(false);

	const dispatch = useDispatch();
	const isPlaying = useSelector(selectIsPlaying);

	const setNewPlaylist = (playlist) => {
		setInitialPlaylist(playlist);
		setPlaylist(playlist);
		dispatch(setIsPlaying(true));
	};

	useEffect(() => {
		if (isShuffle) {
			shuffleTracks();
		} else {
			setPlaylist(initialPlaylist);
		}
		if (audioRef?.current) {
			audioRef.current.currentTime = 0;
		}
		setCurrentTime(0);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isShuffle]);

	useEffect(() => {
		if (audioRef?.current) {
			if (isPlaying && isLoaded) {
				audioRef?.current.play();
			} else {
				audioRef?.current.pause();
			}
		}
	}, [isLoaded, isPlaying]);

	const onLoadedData = (event) => {
		setIsLoaded(true);
		const trackDuration = Math.floor(event.target.duration);
		setDuration(trackDuration);
	};

	useEffect(() => {
		if (currentTime === duration && isLoaded) {
			onTrackEnds();
		}
		let interval;

		if (audioRef?.current) {
			interval = setInterval(() => {
				const refCurrentTime = Math.floor(
					audioRef?.current?.currentTime
				);
				if (isPlaying) {
					setCurrentTime(refCurrentTime);
				}
			}, 1000);
		}

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentTime, isPlaying]);

	const onChangeCurrentTime = (percent) => {
		const newCurrentTime = Math.floor((duration * percent) / 100);
		if (audioRef?.current?.currentTime) {
			audioRef.current.currentTime = newCurrentTime;
		}

		setCurrentTime(newCurrentTime);
	};

	const onNext = () => {
		setCurrentTime(0);
		dispatch(setIsPlaying(true));
		audioRef?.current?.play();

		const tracksLength = playlist.length;

		setCurrentTrackIndex((prev) => {
			if (prev === tracksLength - 1) {
				return 0;
			}

			return prev + 1;
		});
	};

	const onPrev = () => {
		setCurrentTime(0);
		dispatch(setIsPlaying(true));
		audioRef?.current?.play();

		const tracksLength = playlist.length;
		setCurrentTrackIndex((prev) => {
			if (prev === 0) {
				return tracksLength - 1;
			}

			return prev - 1;
		});
	};

	const onMute = () => {
		setIsMuted((prev) => {
			audioRef.current.volume = !prev ? 0 : volume / 100;

			return !prev;
		});
	};

	const onChangeVolume = (value) => {
		setIsMuted(false);
		if (audioRef?.current) {
			audioRef.current.volume = value / 100;
		}
		setVolume(+value);
	};

	const onTrackEnds = () => {
		dispatch(setIsPlaying(false));
		if (repeatMode.value === REPEAT_MODES.NO_REPEAT.value) {
			if (currentTrackIndex <= playlist.length - 1) {
				onNext();
			}
		}

		if (repeatMode.value === REPEAT_MODES.REPEAT.value) {
			onNext();
		}

		if (repeatMode.value === REPEAT_MODES.REPEAT_ONE.value) {
			setCurrentTime(0);
			audioRef.current.currentTime = 0;
			dispatch(setIsPlaying(false));
			audioRef?.current.play();
		}
	};

	const onChangeRepeatMode = () => {
		if (repeatMode.value === REPEAT_MODES.NO_REPEAT.value) {
			setRepeatMode(REPEAT_MODES.REPEAT);
		}

		if (repeatMode.value === REPEAT_MODES.REPEAT.value) {
			setRepeatMode(REPEAT_MODES.REPEAT_ONE);
		}

		if (repeatMode.value === REPEAT_MODES.REPEAT_ONE.value) {
			setRepeatMode(REPEAT_MODES.NO_REPEAT);
		}
	};
	const shuffleTracks = () => {
		const shuffled = playlist
			.map((value) => ({
				value,
				sort: Math.random(),
			}))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);

		setPlaylist(shuffled);
		dispatch(setIsPlaying(true));

		// if (isPlaying) {
		// 	audioRef?.current.play();
		// }
	};

	return {
		props: {
			onLoadedData,
			ref: audioRef,
		},
		isLoaded,
		isPlaying,
		setIsPlaying,
		onNext,
		onPrev,
		duration,
		currentTime,
		onChangeCurrentTime,
		volume,
		onChangeVolume,
		isMuted,
		onMute,
		currentTrack: playlist[currentTrackIndex],
		repeatMode,
		onChangeRepeatMode,
		isShuffle,
		enableShuffling: () => setIsShuffle((prev) => !prev),
		setNewPlaylist,
		setCurrentTrackIndex,
	};
};

export default useAudioplayer;
