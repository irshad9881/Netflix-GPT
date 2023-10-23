import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearchPage:false,
    },
    reducers:{
        setshowGptSearchPage:(state,action)=>{
            state.showGptSearchPage=!state.showGptSearchPage;
        }
    }
})

export const {setshowGptSearchPage}=gptSlice.actions;
export default gptSlice.reducer;