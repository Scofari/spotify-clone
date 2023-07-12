import { ReactNode } from "react";
import styles from "./NavigationSubmenu.module.css";

interface NavigationSubmenuProps {
    children: ReactNode;
}

const NavigationSubmenu = ({ children }: NavigationSubmenuProps) => {
    return <ul className={styles.navContainer}>{children}</ul>;
};

export default NavigationSubmenu;
