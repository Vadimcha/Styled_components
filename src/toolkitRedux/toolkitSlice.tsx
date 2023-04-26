import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        theme: "dark",
    },
    reducers: {
        switch_theme(state) {
            state.theme = (state.theme === "light" ? "dark" : "light")
        },
    }
})

export default toolkitSlice.reducer
export const { switch_theme } = toolkitSlice.actions