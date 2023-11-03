import MovieCard from "./MoviesCard";

const MoviesList=({title,movies})=>{
     
    if(!movies)return;
    return (
        <div className="px-4  " >
             <h1 className="text-md md:text-2xl py-3 text-white">{title}</h1>
          <div className="flex overflow-x-scroll scrollbar-hide   ">
             <div className="flex ">
                {
                movies.map((movie)=>(
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
          </div> 
        </div>
    );
}
export default MoviesList;