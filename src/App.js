import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage';
import Map from './components/Map';
import About from './components/About';
import RouteMap from './components/MapProj'
import Media from './components/Media'

function App() {
  return (
    <Router> 
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
