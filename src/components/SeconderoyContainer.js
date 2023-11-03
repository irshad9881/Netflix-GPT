import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
const SecondrayContainer=()=>{
    const movies=useSelector((store)=>store.movies)
    
    return (
        <div className="bg-black"> 
           <div className="mt-0 md:-mt-40 pl-2 md:pl-10  relative z-20 mb-2">
            <MoviesList title={"now playing"} movies={movies?.nowPlayingMovies}/>
            <MoviesList title={"Populr Movies"} movies={movies?.comodianMovies}/>
            <MoviesList title={"Tv Series Movies"} movies={movies?.tvSeriesMovies}/>
            <MoviesList title={"Upcoming Movies"} movies={movies?.populerMovies}/>
           </div>
            {/* 
             -movies list -populer
                - movies card*n
             -MoviesList -Now Playing 
             -MoviesList -Horrible
             -MoviesList -trending
            
            
            */}
        </div>
    )
};
export default SecondrayContainer;