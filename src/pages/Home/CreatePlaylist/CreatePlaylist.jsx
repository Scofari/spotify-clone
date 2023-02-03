import { RiMusic2Line } from "react-icons/ri";
import { RxPencil1 } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import HeaderMusicBlock from "../../../components/common/HeaderMusicBlock";
import SearchInput from "./../../../components/SearchInput/SearchInput";
import Separator from "../../../components/common/Separator";
import artist from "../../../assets/artistsImg/vovaScofari.jpg";
import styles from "./CreatePlaylist.module.css";

function CreatePlaylist() {
	return (
		<div className={styles.wrapper}>
			<HeaderMusicBlock
				iconPencil={RxPencil1}
				iconMusic={RiMusic2Line}
				avatar={artist}
				songTitle="My Playlist #1"
				background="linear-gradient(#373737, #121212)"
			/>
			<div className={styles.searchContainer}>
				<Separator margin="50px 0 0" />
				<div className={styles.titleBlock}>
					<h2>Let's find something for your playlist</h2>
					<GrClose />
				</div>
				<div className={styles.input}>
					<SearchInput placeholder="Search for songs or episodes" />
				</div>
				<Separator margin="400px 0 50px" />
			</div>
		</div>
	);
}

export default CreatePlaylist;
