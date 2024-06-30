import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage';
import Map from './components/Map';
import About from './components/About';
import RouteMap from './components/MapProj'
import Media from './components/Media'

function App() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const basename = isDevelopment ? '/' : '/cycling'; // Set the basename for production only

  return (
    <Router basename={basename}>
    <Routes>
       <Route index element={<HomePage />} />
       <Route path="/map" element={<Map />} />
       <Route path='/about' element={<About />}/> 
       <Route path="/route" element={<RouteMap/>}/>
       <Route path='/media' element={<Media/>}/>
    </Routes>
    </Router>
  );
}

export default App;
