import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatslice from "./chatslice";
import dataSlice from "./dataSlice";

const store = configureStore({reducer:{
    app: appSlice,
    data:dataSlice,
    chat:chatslice
}})

export default store