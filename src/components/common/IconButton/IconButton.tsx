import { IconType } from "react-icons/lib";
import Tooltip from "../Tooltip";
import styles from "./IconButton.module.css";

interface IconButtonProps {
    icon: IconType;
    onClick: () => void;
    title?: string;
    size?: string;
    isHoverable?: boolean;
    disabled?: boolean;
    fillMode?: string;
    isActive?: boolean;
    isHighlighted?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
    icon,
    size = 20,
    isHoverable,
    disabled = false,
    onClick,
    title = "",
    fillMode = "fill",
    isActive = false,
    isHighlighted = false,
}) => {
    const Icon = icon;
    return (
        <Tooltip text={title}>
            <button
                disabled={disabled}
                onClick={onClick}
                className={`${styles.iconButton}  ${
                    isHoverable ? styles.scale : ""
                } ${isHighlighted ? styles.isHighlighted : ""}`}
            >
                <Icon
                    className={`${styles.iconButton} ${styles[fillMode]} ${
                        isActive ? styles.active : ""
                    } `}
                    style={{ fontSize: size }}
                />
            </button>
        </Tooltip>
    );
};

export default IconButton;
