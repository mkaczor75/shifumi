import * as url from './include/var.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import './App.css'

import Game from './game/Game'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route>
            <Route exact path={url.game} element={<Game />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
