import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utiles/constants"
import { useEffect } from "react";
import { addTvSeries } from "../utiles/movisesSlice";

const useTvSeries=()=>{
     const dispatch=useDispatch();
     //memoization..........................
     const nowTvSeriesMovies=useSelector(store=>store.movies.tvSeriesMovies);

    const getTvSeries=async ()=>{
       const data=await fetch("https://api.themoviedb.org/3/tv/airing_today?page=1",API_OPTIONS);
       const json=await data.json();
       
       dispatch(addTvSeries(json.results));
    }
    useEffect(()=>{
    !nowTvSeriesMovies && getTvSeries();
    },[]);

}
export default useTvSeries;