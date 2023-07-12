import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DefaultSliceState {
    searchTerm: string;
    headerBackground: string;
}

const initialState: DefaultSliceState = {
    searchTerm: "",
    headerBackground: "#121212",
};

const { actions, reducer: defaultReducer } = createSlice({
    name: "default",
    initialState,
    reducers: {
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
        setHeaderBackground(state, action: PayloadAction<string>) {
            state.headerBackground = action.payload;
        },
    },
});

export const { setSearchTerm, setHeaderBackground } = actions;

export default defaultReducer;
