import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import dataSlice from "./dataSlice";

const store = configureStore({reducer:{
    app: appSlice,
    data:dataSlice
}})

export default store