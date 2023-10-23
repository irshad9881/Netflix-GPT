import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import {   LOGIN_BG } from "../utiles/constants";
const GptSearchPage=()=>{
    return(
        <div>
            <div className="absolute -z-10">
             <img src={LOGIN_BG} alt="Back img" />
            </div>
            <GptSearchBar/>
            <GptMoviesSuggestion/>
        </div>
    );
}
export default GptSearchPage;