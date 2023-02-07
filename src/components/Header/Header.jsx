import { useLocation, useNavigate } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Button from "../common/Button";
import NavigationItem from "../common/NavigationItem";
import SearchInput from "./../SearchInput/SearchInput";
import NavigationHeaderButton from "./../NavigationHeaderButton/NavigationHeaderButton";
import styles from "./Header.module.css";

const Header = ({ headerBackground, playIsVisible = false }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	const goForward = () => navigate(1);

	return (
		<header
			style={{ background: headerBackground }}
			className={styles.header}
		>
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
					/>
				</div>
				{location.pathname === "/search" && (
					<SearchInput placeholder="What do you want to listen to?" />
				)}
				{playIsVisible && <h1>Play</h1>}
			</div>
			<div className={styles.headerNavRight}>
				<NavigationItem title="Sign up" />
				<Button title="Log in" />
			</div>
		</header>
	);
};

export default Header;
