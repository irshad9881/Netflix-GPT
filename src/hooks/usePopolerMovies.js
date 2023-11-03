import { useDispatch, useSelector } from "react-redux";
import {addPopolerMovies} from "../utiles/movisesSlice" 
import { useEffect } from "react";
import { API_OPTIONS } from "../utiles/constants";
const usePopulerMovies=()=>{
     const dispatch=useDispatch();
     //memoization............
     const nowPopulerMovies=useSelector(store=>store.movies.populerMovies);

    const getPopolerMovies= async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS);
        const json=await data.json();
         
        dispatch(addPopolerMovies(json?.results));
    }

    useEffect(()=>{
        !nowPopulerMovies && getPopolerMovies();
    },[]);


}
export default usePopulerMovies;