// import configureStore from './configureStore';
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { appNameSlice } from "./reducers/appName";
import { tokenSlice } from "./reducers/token";

export default configureStore({
    reducer: combineReducers({
        token: tokenSlice.reducer,
        appName: appNameSlice.reducer,
    })
});