import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GameSelector from "./Screens/Landing/GameSelector";
import Destiny from "./Screens/Destiny/Destiny";

const RoutesList = () => {

    return(
        <Router>
            <Routes>
                <Route exact path='/' exact element={<GameSelector />} />
                <Route exact path='/destiny' exact element={<Destiny />} />
            </Routes>
      </Router>
    );
}

export default RoutesList; 