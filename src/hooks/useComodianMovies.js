import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utiles/constants";
import { useEffect } from "react";
import { addComodianMovies } from "../utiles/movisesSlice";

const useComodianMovies=()=>{
     const dispatch=useDispatch();
    const getComodianMovies=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/tv/popular?page=1",API_OPTIONS);
        const json=await data.json();
        
        dispatch(addComodianMovies(json.results));
    }
    useEffect(()=>{
        getComodianMovies();
    },[])
}
export default useComodianMovies;