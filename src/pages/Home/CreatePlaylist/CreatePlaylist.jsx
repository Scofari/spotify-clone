import { RiMusic2Line } from "react-icons/ri";
import { RxPencil1 } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import HeaderMusicBlock from "../../../components/common/HeaderMusicBlock";
import SearchInput from "./../../../components/SearchInput/SearchInput";
import OptionsButton from "../../../components/common/OptionsButton";
import Separator from "../../../components/common/Separator";
import Header from "./../../../components/Header/index";
import artist from "../../../assets/artistsImg/vovaScofari.jpg";
import styles from "./CreatePlaylist.module.css";

function CreatePlaylist() {
	return (
		<div className={styles.wrapper}>
			<Header background="#373737" />
			<HeaderMusicBlock
				iconPencil={RxPencil1}
				iconMusic={RiMusic2Line}
				avatar={artist}
				avatarName="Vova Scofari"
				blockTitle="Playlist"
				songTitle="My Playlist #1"
				background="linear-gradient(#373737, rgba(0, 0, 0, 0.9))"
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
