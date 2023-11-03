import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import {   LOGIN_BG } from "../utiles/constants";
const GptSearchPage=()=>{
    
    return(
       <>
            <div className="fixed -z-10 ">
               <img  className="h-screen object-cover md:w-screen "src={LOGIN_BG} alt="Back img" />
            </div>
             <div className=" ">
               <GptSearchBar/>
               <GptMoviesSuggestion/>
             </div>
       </>
      
    );
}
export default GptSearchPage;