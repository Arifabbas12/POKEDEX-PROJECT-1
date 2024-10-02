import './App.css'
import CustomRoutes from './Routes/CustomRoute'
import { Link } from 'react-router-dom'
function App() {
  
  return (
    <div className='outer-pokedex'>
     <h1 className="heading">
    <Link className='Link' to="/"> Pokedex </Link>
     </h1>
     <CustomRoutes/>
    </div>
  )
}

export default App
