import { useSelector } from "react-redux";
import lang from "../utiles/languageConstant";

const GptSearchBar=()=>{
    const langKey=useSelector(store=>store.config.lang);
    return(
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12 ">
                <input className=" hover:text-white hover:bg-gray-300 p-2 m-2 col-span-9" type="text" placeholder={lang[langKey].gptSearchPlaceholder}/>
                <button className=" hover:bg-red-700 col-span-3 m-2 py-2 px-4 bg-red-600 text-white rounded-lg">{lang[langKey].search}</button>
            </form>
        </div>
    );
}
export default GptSearchBar;