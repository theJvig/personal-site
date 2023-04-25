import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GameSelector from "./Screens/Landing/GameSelector";
import Destiny from "./Screens/Destiny/Destiny";
import Home from "./Screens/Landing/Home";

const RoutesList = () => {

    return(
        <Router>
            <Routes>
                <Route exact path='/' exact element={<Home />}/>
                <Route exact path='/gameselector' exact element={<GameSelector />} />
                <Route exact path='/gameselector/destiny' exact element={<Destiny />} />
            </Routes>
      </Router>
    );
}

export default RoutesList; 