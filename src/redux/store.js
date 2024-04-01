import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slices/newsSlice";
import userInputSlice from './slices/userInputSlice'

export default configureStore({
    reducer: {
        newsReducer: newsSlice,
        userInputReducer: userInputSlice
    }
})