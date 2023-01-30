import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchTerm: "",
	headerBackground: "#121212",
};

const { actions, reducer: defaultReducer } = createSlice({
	name: "default",
	initialState,
	reducers: {
		setSearchTerm(state, action) {
			state.searchTerm = action.payload.searchTerm;
		},
		setHeaderBackground(state, action) {
			state.headerBackground = action.payload;
		},
	},
});

export const { setSearchTerm, setHeaderBackground } = actions;

export default defaultReducer;
