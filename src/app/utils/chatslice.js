const { createSlice } = require("@reduxjs/toolkit")

const chatslice = createSlice({
    name:"chat",
    initialState:{
        message:[],
        
    },
    reducers:{
        addmessage:(state,action)=>{
            
        state.message.unshift(action.payload);
        state.message.splice(18,1)
        }
    }
})


export default chatslice.reducer
export const {addmessage} = chatslice.actions