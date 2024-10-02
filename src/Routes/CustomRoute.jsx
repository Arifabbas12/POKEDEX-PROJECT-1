import { Routes, Route } from "react-router-dom";
import Pokadex from "../Component/Pokadex/Pokadex";
import PokemonDetails from "../Component/PokemonDetails/PokemonDetails";
function CustomRoutes(){
     return(
    
        <Routes>
            <Route path="/" element={<Pokadex/>}/>
            <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
        </Routes>

     );
}

export default CustomRoutes;