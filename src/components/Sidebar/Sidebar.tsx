import { Link } from "react-router-dom";
import NavigationMenu from "../NavigationMenu";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Link to="/">
                <img
                    className={styles.logo}
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                    alt="logo"
                />
            </Link>
            <NavigationMenu />
            <div className={styles.sidebarResize}></div>
        </div>
    );
};

export default Sidebar;
