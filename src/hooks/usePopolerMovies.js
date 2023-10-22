import { useDispatch } from "react-redux";
import {addPopolerMovies} from "../utiles/movisesSlice" 
import { useEffect } from "react";
import { API_OPTIONS } from "../utiles/constants";
const usePopulerMovies=()=>{
     const dispatch=useDispatch();
    const getPopolerMovies= async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS);
        const json=await data.json();
        console.log("UpComming");
        console.log(json?.results);
        dispatch(addPopolerMovies(json?.results));
    }

    useEffect(()=>{
        getPopolerMovies();
    },[]);


}
export default usePopulerMovies;