import styles from "./Tooltip.module.css";

const Tooltip = ({ children, text, style, position = "top" }) => {
	return (
		<div
			data-title={text}
			className={`${styles.tooltip} ${styles[position]} `}
			style={style}
		>
			{children}
		</div>
	);
};

export default Tooltip;
