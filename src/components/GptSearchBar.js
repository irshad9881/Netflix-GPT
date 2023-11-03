import { useDispatch, useSelector } from "react-redux";
import lang from "../utiles/languageConstant";
import { useRef } from "react";
import openai from "../utiles/openai";
import { API_OPTIONS } from "../utiles/constants";
import { addGptMoviesResults } from "../utiles/gptSlice";
import Error from "./Error";
const GptSearchBar=()=>{
  const dispatch=useDispatch();
    const langKey=useSelector(store=>store.config.lang);
    const searchText=useRef(null);
     const searchMovieTMDB=async (movie)=>{
     const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
     const json =await data.json();
    //  console.log(json.results)
     return json.results;
     }

    const  handleGptSearchBar=async ()=>{
       console.log("movies ::",searchText.current.value);
       //make api call
       const gptQuery="Act as Movie Recommendation system and suggest some movies for the query: "+
       searchText.current.value 
       +" only give me name of  five movies ,comma seperated like the example results:Sholay, Don, Gadar, Golmaal, Koi Mil Gaya";

       const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      
      if(!gptResults.choices)
      {
        //navigate on erro page using usenavigate hook
        <Error/>
        return alert("Oops! eroor with gpt api");
      }
      // //convert string into array useing split fun 
      const gptmovies=gptResults?.choices?.[0]?.message?.content.split(",");
      const promisArray=gptmovies.map((movie)=>searchMovieTMDB(movie));//map in javascript not wait resoponse but  searchMovieTMDB async funtion take some time to return result so useiing 
      const tmdbResults=await Promise.all(promisArray);   //searchMoviTMDB return array of promise means it will return a promise for each movie  for getting result from this array usein Promise.all()
      // console.log(tmdbResults);
       dispatch(addGptMoviesResults({title:gptmovies,moviesResults:tmdbResults}));
    }

    return(
        <div className="pt-[45%]  md:pt-[10%] flex justify-center ">
            <form className="w-full md:w-1/2  bg-black grid grid-cols-12 " onSubmit={(e)=>e.preventDefault()}>
                <input  ref={searchText} className="h-10 md:h-15  hover:text-white hover:bg-gray-300 p-1 m-1 md:p-2 md:m-2 col-span-9" type="text" placeholder={lang[langKey].gptSearchPlaceholder}/>
                <button onClick={handleGptSearchBar}className="h-9 my-auto  md:h-10 p-2 m-1 md:p-2 md:m-2 hover:bg-red-700 col-span-3 m-2 py-2 px-4 bg-red-600 text-white rounded-lg">{lang[langKey].search}</button>
            </form>
        </div>
    );
}
export default GptSearchBar;