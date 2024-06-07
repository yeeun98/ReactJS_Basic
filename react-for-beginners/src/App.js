import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Movie from './components/practice/Movie';
import MovieDetail from './components/practice/MovieDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetail />}/>
      </Routes>
    </Router>
  );
}

export default App;
