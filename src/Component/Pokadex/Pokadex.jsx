import PokadexList from "../PokadexList/PokadexList";
import Search from "../Search/Search";
import './Pokadex.css'
function Pokadex(){
   return(
   <div className="pokedex-wrapper">
    <Search/>
    <PokadexList/>
   </div>
   );
}
export default Pokadex;