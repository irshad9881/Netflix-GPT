import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowMovieTrailer:null,
    },
    reducers:{
           addNowPlayingMovies:(state,action)=>{
               state.nowPlayingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.nowMovieTrailer=action.payload;
        }
    },
});

export const {addNowPlayingMovies,addMovieTrailer} = movieSlice.actions;
export default movieSlice.reducer;