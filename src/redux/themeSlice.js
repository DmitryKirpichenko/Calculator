import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:'theme',
    initialState:{
        value: 'light'
    },
    reducers:{
       switchTheme:(state, name) =>{
           state.value = name.payload
       }

    }
})

export const {switchTheme} = themeSlice.actions
export default themeSlice.reducer