import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utiles/movisesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utiles/constants";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    //memoization...........................
   // const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies= async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json=await data.json();
    
    dispatch(addNowPlayingMovies(json.results));
}
    
useEffect(()=>{
     
      getNowPlayingMovies();
},[]);

};
export default useNowPlayingMovies;
