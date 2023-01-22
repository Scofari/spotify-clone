import { v4 as uuidv4 } from "uuid";
import viralHits from "../../audioclips/Pop/viralHits";
import ncsRelease from "../../audioclips/Pop/ncsRelease";
import marshmello from "../../audioclips/Pop/marshmello";
import justinBieber from "../../audioclips/Pop/justinBieber";
import alanWalker from "../../audioclips/Pop/alanWalker";

export const initialGenres = [
	{
		id: uuidv4(),
		title: "For fans of Vova Scofari",
		playlistTitle: "Made For You",
		background: "#1E3264",
		playlistImg:
			"https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
		playlists: [
			{
				id: uuidv4(),
				playlistCover: alanWalker[0].cover,
				playlistName: "Vova Scofari",
				playlistDescription: "Vova Scofari",
				tracks: alanWalker,
			},
			// {
			// 	id: uuidv4(),
			// 	playlistCover: vova,
			// 	playlistName: "Beats by Vova Scofari",
			// 	playlistDescription: "Vova Scofari",
			// 	tracks: scofariBeats,
			// },
			// {
			// 	id: uuidv4(),
			// 	playlistCover: vova,
			// 	playlistName: "Produced by Vova Scofari",
			// 	playlistDescription: "Vova Scofari",
			// 	tracks: vovaScofariTracks[0].tracks,
			// },
		],
	},
	{
		id: uuidv4(),
		title: "Rock",
		playlistTitle: "Rock",
		background: "#E91429",
		playlistImg:
			"https://i.scdn.co/image/ab67fb8200005cafae7e69beb88f16969641b53e",
		playlists: [
			// {
			// 	id: uuidv4(),
			// 	playlistCover: linkinPark[0].playlistCover,
			// 	playlistName: linkinPark[0].playlistName,
			// 	playlistDescription: linkinPark[0].playlistAuthor,
			// 	tracks: linkinPark[0].tracks,
			// },
			// {
			// 	id: uuidv4(),
			// 	playlistCover: acdc[0].playlistCover,
			// 	playlistName: acdc[0].playlistName,
			// 	playlistDescription: acdc[0].playlistAuthor,
			// 	tracks: acdc[0].tracks,
			// },
			// {
			// 	id: uuidv4(),
			// 	playlistCover: metallica[0].playlistCover,
			// 	playlistName: metallica[0].playlistName,
			// 	playlistDescription: metallica[0].playlistAuthor,
			// 	tracks: metallica[0].tracks,
			// },
			// {
			// 	id: uuidv4(),
			// 	playlistCover: nirvana[0].playlistCover,
			// 	playlistName: nirvana[0].playlistName,
			// 	playlistDescription: nirvana[0].playlistAuthor,
			// 	tracks: nirvana[0].tracks,
			// },
			// {
			// 	id: uuidv4(),
			// 	playlistCover: koroliShut[0].playlistCover,
			// 	playlistName: koroliShut[0].playlistName,
			// 	playlistDescription: koroliShut[0].playlistAuthor,
			// 	tracks: koroliShut[0].tracks,
			// },
			// {
			// 	id: uuidv4(),
			// 	playlistCover: ledZeppelin[0].playlistCover,
			// 	playlistName: ledZeppelin[0].playlistName,
			// 	playlistDescription: ledZeppelin[0].playlistAuthor,
			// 	tracks: ledZeppelin[0].tracks,
			// },
		],
	},
	{
		id: uuidv4(),
		title: "Rap",
		playlistTitle: "Rap",
		background: "#BC5900",
		playlistImg:
			"https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1",
		playlists: [
			// {
			// 	id: uuidv4(),
			// 	playlistCover: travisScott[0].playlistCover,
			// 	playlistName: travisScott[0].playlistName,
			// 	playlistDescription: travisScott[0].playlistAuthor,
			// 	tracks: travisScott[0].tracks,
			// },
			// {
			// 	id: uuidv4(),
			// 	playlistCover: tupac[0].playlistCover,
			// 	playlistName: tupac[0].playlistName,
			// 	playlistDescription: tupac[0].playlistAuthor,
			// 	tracks: tupac[0].tracks,
			// },
			// {
			// 	id: uuidv4(),
			// 	playlistCover: tylerTheCreator[0].playlistCover,
			// 	playlistName: tylerTheCreator[0].playlistName,
			// 	playlistDescription: tylerTheCreator[0].playlistAuthor,
			// 	tracks: tylerTheCreator[0].tracks,
			// },
			// {
			// 	id: uuidv4(),
			// 	playlistCover: centralCee[0].playlistCover,
			// 	playlistName: centralCee[0].playlistName,
			// 	playlistDescription: centralCee[0].playlistAuthor,
			// 	tracks: centralCee[0].tracks,
			// },
			// {
			// 	id: uuidv4(),
			// 	playlistCover: jackHarlow[0].playlistCover,
			// 	playlistName: jackHarlow[0].playlistName,
			// 	playlistDescription: jackHarlow[0].playlistAuthor,
			// 	tracks: jackHarlow[0].tracks,
			// },
			// {
			// 	id: uuidv4(),
			// 	playlistCover: kendrickLamar[0].playlistCover,
			// 	playlistName: kendrickLamar[0].playlistName,
			// 	playlistDescription: kendrickLamar[0].playlistAuthor,
			// 	tracks: kendrickLamar[0].tracks,
			// },
		],
	},
	{
		id: uuidv4(),
		title: "Pop",
		playlistTitle: "Pop",
		background: "#148A08",
		playlistImg:
			"https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768",
		playlists: [
			{
				id: uuidv4(),
				playlistCover:
					"https://i.scdn.co/image/ab67706f00000002d971c6c23114fc7636dc23eb",
				playlistName: "Viral Hits",
				playlistDescription: "by Spotify",
				tracks: viralHits,
			},
			{
				id: uuidv4(),
				playlistCover:
					"https://wallpaperset.com/w/full/6/3/f/393829.jpg",
				playlistName: "NCS Release",
				playlistDescription: "by Spotify",
				tracks: ncsRelease,
			},
			{
				id: uuidv4(),
				playlistCover: "https://wallpapercave.com/wp/wp9683911.jpg",
				playlistName: "Justin Bieber",
				playlistDescription: "by Spotify",
				tracks: justinBieber,
			},
			{
				id: uuidv4(),
				playlistCover:
					"https://i.ytimg.com/vi/fOVlFm5_54w/maxresdefault.jpg",
				playlistName: "Marshmello",
				playlistDescription: "by Spotify",
				tracks: marshmello,
			},
		],
	},
];
