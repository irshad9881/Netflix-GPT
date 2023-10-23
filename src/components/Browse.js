import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import SecondrayContainer from "./SeconderoyContainer";
import MainContainer from "./MainContainer";
import usePopulerMovies from "../hooks/usePopolerMovies";
import useTvSeries from "../hooks/useTVSeries";
import useComodianMovies from "../hooks/useComodianMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
const Browse=()=>{
        const showGptSearchPage=useSelector(store=>store.gpt.showGptSearchPage);
        useNowPlayingMovies();
        usePopulerMovies();
        useTvSeries();
        useComodianMovies();
        return (
            <div>
              <Header/>
              {showGptSearchPage?<GptSearchPage/>:
              <> 
              <MainContainer/>
              <SecondrayContainer/>
              </>
              } 
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