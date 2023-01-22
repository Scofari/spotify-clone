import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectCurrentPlaylist } from "../../redux/selectors";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Player from "../Player";
import styles from "./Layout.module.css";

const Layout = () => {
	const tracks = useSelector(selectCurrentPlaylist);

	return (
		<>
			<Sidebar />
			{/* <Header /> */}
			<div className={styles.mainSection}>{<Outlet />}</div>
			<Player tracks={tracks} />
		</>
	);
};

export default Layout;
