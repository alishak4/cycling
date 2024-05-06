import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage';
import Map from './components/Map';

function App() {
  return (
    <Router> 
    <Routes>
       <Route index element={<HomePage />} />
       <Route path="/map" element={<Map />} />
    </Routes>
    </Router>
  );
}

export default App;
