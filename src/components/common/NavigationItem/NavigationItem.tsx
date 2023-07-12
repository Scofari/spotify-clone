import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";

interface NavigationItem {
    title: string;
    to?: string;
    icon?: IconType;
    className?: string;
}

const setActive = ({ isActive }: any) => ({ color: isActive ? "white" : "" });

const NavigationItem: React.FC<NavigationItem> = ({
    title = "",
    to = "",
    icon,
    className = "",
}) => {
    const Icon = icon;
    return (
        <li>
            <NavLink
                to={to}
                className={`${styles.link} ${className} `}
                style={setActive}
                end
            >
                {Icon && <Icon className={styles.navIcon} />}
                <span className={styles.title}>{title}</span>
            </NavLink>
        </li>
    );
};

export default NavigationItem;
