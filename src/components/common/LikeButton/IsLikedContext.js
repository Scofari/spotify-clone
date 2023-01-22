import React, { useContext, useState } from "react";

const IsLikedContext = React.createContext();

export const useIsLiked = () => {
	return useContext(IsLikedContext);
};

export const IsLikedProvider = ({ children }) => {
	const [isLiked, setIsLiked] = useState(false);
	const toggleIsLiked = () => setIsLiked((prev) => !prev);

	return (
		<IsLikedContext.Provider
			value={{
				isLiked: isLiked,
				toggleIsLiked,
			}}
		>
			{children}
		</IsLikedContext.Provider>
	);
};
