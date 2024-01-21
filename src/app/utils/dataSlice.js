import { createSlice } from "@reduxjs/toolkit";

const dataSlice= createSlice({
    name:"data",
    initialState:{
        json:null,
        videos:[]
    },
    reducers:{updateData:(state,action)=>{
        state.json=action.payload.json
        state.videos=action.payload.videos

    }}
})

export const {updateData}=dataSlice.actions
export default dataSlice.reducer