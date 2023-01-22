import styles from "./Separator.module.css";

const Separator = ({ margin }) => {
	return <div style={{ margin: margin }} className={styles.separator}></div>;
};

export default Separator;
