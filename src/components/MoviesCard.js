import {IMG_CDN_URL} from "../utiles/constants"
const MovieCard=({posterPath})=>{
    if(!posterPath)return null;
    return (
        <div className="w-28 md:w-32 pr-0 md:pr-3 px-2 md:px-2   shadow-2xl transition ease-in-out hover:scale-150 duration-100 ">
            <img src={IMG_CDN_URL+posterPath} alt="background img" />
        </div>
    );
}

export default MovieCard;