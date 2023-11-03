import { useSelector } from "react-redux";
import MoviesList from "./MoviesList"
 

const GptMoviesSuggestion = () => {
  const {moviesName,moviesResults}=useSelector(store=>store.gpt);
   if(!moviesName)
  { //shimer ui
    return <h1 className="font-bold text-xs text-white ">Loading...</h1>;
  }
  return (
    <div className="p-4 m-4 bg-black text-teal-50 bg-opacity-90 text-sm md:text-lg">
      <div>
        {
          moviesName.map((moviesName,index)=>
          <MoviesList 
          key={moviesName}
          title={moviesName}
          movies={moviesResults[index]}
          />)
        }
      </div>
    </div>
  )
}

export default GptMoviesSuggestion;
