import { BG_URL } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
            <img src={BG_URL} alt ="logo"/>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    );
};

export default GPTSearch;
