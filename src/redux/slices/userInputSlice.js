import { createSlice } from "@reduxjs/toolkit";

const userInputSlice = createSlice({
    name: 'userInputSlice',
    initialState: {
        userInput: 'tesla',
    },
    reducers: {
        setUserInput: (state, action) => {
            state.userInput = action.payload;
        }
    }
})

export const { setUserInput } = userInputSlice.actions
export default userInputSlice.reducer;