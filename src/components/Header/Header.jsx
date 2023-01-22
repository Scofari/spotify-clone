import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Button from "../common/Button";
import NavigationItem from "../common/NavigationItem";
import SearchInput from "./../SearchInput/SearchInput";
import NavigationHeaderButton from "./../NavigationHeaderButton/NavigationHeaderButton";
import styles from "./Header.module.css";

const Header = ({ background }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	const goForward = () => navigate(1);

	// const [navBar, setNavBar] = useState(false);
	// useEffect(() => {
	// 	const changeBackground = () => {
	// 		console.log("window.scrollY: ", window.scrollY);
	// 		if (window.scrollY >= 700) {
	// 			setNavBar(true);
	// 		} else {
	// 			setNavBar(false);
	// 		}
	// 	};
	// 	console.log("hi");

	// 	window.addEventListener("scroll", changeBackground);
	// 	return () => {
	// 		window.removeEventListener("scroll", changeBackground);
	// 	};
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [window.scrollY]);

	return (
		<header style={{ background: background }} className={styles.header}>
			<div className={styles.headerNavLeft}>
				<div className={styles.arrows}>
					<NavigationHeaderButton
						icon={SlArrowLeft}
						text="Go Back"
						onClick={goBack}
						disabled={
							location.key === "default" &&
							location.pathname === "/"
						}
					/>
					<NavigationHeaderButton
						icon={SlArrowRight}
						text="Go Forward"
						onClick={goForward}
						// disabled={location.key === "default"}
					/>
				</div>
				{location.pathname === "/search" && (
					<SearchInput placeholder="What do you want to listen to?" />
				)}
			</div>
			<div className={styles.headerNavRight}>
				<NavigationItem
					title="Premium"
					className={styles.headerNavLink}
				/>
				<NavigationItem
					title="Support"
					className={styles.headerNavLink}
				/>
				<NavigationItem
					title="Download"
					className={styles.headerNavLink}
				/>
				<div className={styles.separator}></div>
				<NavigationItem title="Sign up" />
				<Button title="Log in" />
			</div>
		</header>
	);
};

export default Header;
