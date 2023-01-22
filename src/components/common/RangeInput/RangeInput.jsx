import styles from "./RangeInput.module.css";

const RangeInput = ({ onChange, value, step = 0, className = "" }) => {
	return (
		<input
			className={`${styles.inputRange} ${className}`}
			step={step}
			style={{ "--value": `${value}%` }}
			type="range"
			value={value}
			onChange={(e) => {
				onChange(e.target.value);
			}}
		/>
	);
};

export default RangeInput;
