import { createSlice } from '@reduxjs/toolkit'

const initialSateValue = {name: "", age:0, email: ""}

 const userSlice = createSlice({
    name: "user",
    initialState:{
        value: initialSateValue
    },
    reducers:{
        login: (state, action) => {
            state.value = action.payload;
        },
        logout:(state) => {
            state.value = initialSateValue
        }
    },
});

export const  { login , logout } = userSlice.actions

export default userSlice.reducer