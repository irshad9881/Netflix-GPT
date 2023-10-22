import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowMovieTrailer:null,
        populerMovies:null,
        tvSeriesMovies:null,
        comodianMovies:null,
    },
    reducers:{
           addNowPlayingMovies:(state,action)=>{
               state.nowPlayingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.nowMovieTrailer=action.payload;
        },
        addPopolerMovies:(state,action)=>{
            state.populerMovies=action.payload;
        },
        addTvSeries:(state,action)=>{
            state.tvSeriesMovies=action.payload;
        },
        addComodianMovies:(state,action)=>{
            state.comodianMovies=action.payload;
        }
    },
});

export const {addNowPlayingMovies,addMovieTrailer,addPopolerMovies,addTvSeries,addComodianMovies} = movieSlice.actions;
export default movieSlice.reducer;