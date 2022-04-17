import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
    name:'history',
    initialState:{
        value: []
    },
    reducers:{
        addentry:(state, pad) =>{
            state.value.push(pad.payload)
        },
        clearhistory:(state) =>{
            state.value.length = 0
        }

    }
})

export const {addentry, clearhistory} = historySlice.actions
export default historySlice.reducer