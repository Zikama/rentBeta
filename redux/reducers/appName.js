import { createSlice } from "@reduxjs/toolkit";

// create token slice
export const appNameSlice = createSlice({
    name: "appName",
    initialState: {
        appName: 'RentBeta',
    },
    reducers: {
        // set token
        setAppName: (state, action) => {
            state.appName = action.payload;
        },

    }
});

// Export actions
export const { setAppName } = appNameSlice.actions;

export default appNameSlice.reducer;