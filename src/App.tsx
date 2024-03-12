import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeekOne from './pages/WeekOne';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/week1" element={<WeekOne />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
