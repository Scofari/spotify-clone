import styles from "./RangeInput.module.css";

interface RangeInputProps {
    onChange: (value: string) => void;
    value: string | number;
    className: string;
    step?: string | number;
}

const RangeInput: React.FC<RangeInputProps> = ({
    onChange,
    value,
    step = 0,
    className = "",
}) => {
    const styleValue = { "--value": `${value}%` };

    return (
        <input
            className={`${styles.inputRange} ${className}`}
            step={step}
            style={styleValue as object}
            type="range"
            value={value}
            onChange={(e) => {
                onChange(e.target.value);
            }}
        />
    );
};

export default RangeInput;
