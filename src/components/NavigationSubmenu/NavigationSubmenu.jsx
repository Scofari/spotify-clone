import styles from "./NavigationSubmenu.module.css";

const NavigationSubmenu = ({ children }) => {
	return <ul className={styles.navContainer}>{children}</ul>;
};

export default NavigationSubmenu;
