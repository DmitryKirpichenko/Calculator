import { configureStore } from "@reduxjs/toolkit";
import expressionSlice from "./expressionSlice";
import hisrorySlice from "./hisrorySlice";
import themeSlice from "./themeSlice";

export default configureStore({
    reducer: {
        expression: expressionSlice,
        history: hisrorySlice,
        theme: themeSlice,
    },
})