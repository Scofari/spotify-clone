import styles from "./Tooltip.module.css";

interface TooltipProps {
    children?: React.ReactNode;
    text?: string;
    style?: React.CSSProperties;
    position?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
    children,
    text = "",
    style,
    position = "top",
}) => {
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
