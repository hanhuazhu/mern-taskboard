
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



import Home from './pages/Home';
import Board from './pages/Board';


function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<Board />} />
      </Routes>      
    </Router>
  );
}

export default App;
