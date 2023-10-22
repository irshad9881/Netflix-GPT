import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import SecondrayContainer from "./SeconderoyContainer";
import MainContainer from "./MainContainer";
const Browse=()=>{
        
        useNowPlayingMovies();

        return (
            <div>
            <Header/> 
            <MainContainer/>
            <SecondrayContainer/>
            {/* 
              -main Container
                -background movies
                -movie title
              -secondery Container
                -movies list*n
                -moves cards*n 
            */}
            </div>
        );
}
export default Browse;