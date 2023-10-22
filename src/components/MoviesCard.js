import {IMG_CDN_URL} from "../utiles/constants"
const MovieCard=({posterPath})=>{

    return (
        <div className="w-32 pr-3">
            <img src={IMG_CDN_URL+posterPath} alt="back img" />
        </div>
    );
}
export default MovieCard;