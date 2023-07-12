import { IconType } from "react-icons/lib";
import Tooltip from "../common/Tooltip";
import styles from "./NavigationHeaderButton.module.css";

interface NavigationHeaderButtonProps {
    icon: IconType;
    disabled?: boolean;
    onClick: () => void;
    text: string;
}

const NavigationHeaderButton = ({
    icon,
    disabled = false,
    onClick,
    text = "",
}: NavigationHeaderButtonProps) => {
    const Icon = icon;
    return (
        <>
            <Tooltip position={`${disabled ? "top" : "bottom"}`} text={text}>
                <div
                    className={`${
                        disabled ? styles.notAllowed : styles.pointer
                    }`}
                >
                    <button
                        className={styles.button}
                        onClick={onClick}
                        disabled={disabled}
                    >
                        <Icon />
                    </button>
                </div>
            </Tooltip>
        </>
    );
};

export default NavigationHeaderButton;
