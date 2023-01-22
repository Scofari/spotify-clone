import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";

const setActive = ({ isActive }) => ({ color: isActive ? "white" : "" });

const NavigationItem = ({
	title = "",
	to = "",
	icon: Icon,
	className = "",
}) => {
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
