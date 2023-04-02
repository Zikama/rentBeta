
import { createSlice } from "@reduxjs/toolkit";

// create token slice
export const tokenSlice = createSlice({
    name: "token",
    initialState: {
        token:  null,
        isAuthenticated: false,
        error: null,
    },
    reducers: {
        // set token
        setToken: (state, action) => {
            state.token = action.payload;
        },
        // set isAuthenticated
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        // set error
        setError: (state, action) => {
            state.error = action.payload;
        }

    }
});

// Export actions
export const { setToken, setIsAuthenticated, setError } = tokenSlice.actions;

export default tokenSlice.reducer;