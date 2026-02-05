import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapComponent from './components/MapComponent';
// import About from './components/About';
import RouteMap from './components/RouteMap'
import Media from './components/Media'
// import ChapelHillMap from './components/ChapelHillMap';
import Home from './components/Home'
import Gallery from './components/Gallery';
function App() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const basename = isDevelopment ? '/' : '/cycling'; // Set the basename for production only

  return (
    <Router basename={basename}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cycling" element={<Home />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/route" element={<RouteMap autoStart />} />
        <Route path='/media' element={<Media />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
