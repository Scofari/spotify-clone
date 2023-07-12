import Header from "../../../components/Header";
import NavigationItem from "../../../components/common/NavigationItem/index";
import styles from "./NotFound.module.css";

function NotFound() {
    return (
        <div className={styles.body}>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.icon}>
                    <img
                        src="https://open.spotifycdn.com/cdn/images/error-page-logo.24aca703.svg"
                        alt="logo"
                    />
                </div>
                <div className={styles.content}>
                    <h1>Page not found</h1>
                    <p>We can’t seem to find the page you are looking for.</p>
                    <div>
                        <NavigationItem
                            title="Home"
                            className={styles.primary}
                        />
                        <NavigationItem
                            title="Help"
                            className={styles.center}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
