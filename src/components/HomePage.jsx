import React from "react";
import './HomePage.css';
import mountains from '../images/mountains.jpg';

const HomePage = () => {
    console.log("hello")
  return (
    <div className="centered">
      <h1> The Himalayan Odyssey </h1>
      <img src={mountains} alt="mountains" />
    </div>
    
  );
}

export default HomePage;
