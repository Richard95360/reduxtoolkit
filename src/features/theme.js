import { createSlice } from '@reduxjs/toolkit'

const initialSateValue = "";

 const themeSlice = createSlice({
    name: "theme",
    initialState:{
        value: initialSateValue
    },
    reducers:{
        changeColor: (state, action) => {
            state.value = action.payload;
        },
       
    },
});

export const  { changeColor } = themeSlice.actions

export default themeSlice.reducer