import styles from "./Separator.module.css";

interface SeparatorProps {
    margin: string;
}

const Separator = ({ margin }: SeparatorProps) => {
    return <div style={{ margin: margin }} className={styles.separator}></div>;
};

export default Separator;
