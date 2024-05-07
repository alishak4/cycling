import './App.css';
<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage';
import Map from './components/Map';
import About from './components/About';
import RouteMap from './components/MapProj'
=======
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';

>>>>>>> 549e035 (home page)
function App() {
  return (
    <Router> 
    <Routes>
<<<<<<< HEAD
       <Route index element={<HomePage />} />
       <Route path="/map" element={<Map />} />
       <Route path='/about' element={<About />}/> 
       <Route path="/mapproj" element={<RouteMap/>}/>
=======
      <Route index element={<HomePage />}></Route>
      <Route path='home' element={<HomePage />}> </Route>
>>>>>>> 549e035 (home page)
    </Routes>
    </Router>
  );
}

export default App;
