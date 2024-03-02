import React from "react";
import './HomePage.css';
import mountains from '../images/mountains.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
const HomePage = () => {
    console.log("hello")
  return (
    <div> 
    <div className="centered">
      <h1> The Himalayan Odyssey </h1>
      <img src={mountains} alt="mountains" />
      <p> The Himalayas revered for centuries as the abode of the Gods, have been a source of inspiration for man since aeons.</p> 
     <p>On March 20th, 1986, we set out on a mission to know our Himalayas.</p>
    </div>

    <div className="grid">
    <img src={img1} alt="picture1" className="grid-item"/>
    <img src={img2} alt="picture1" className="grid-item"/>
    <img src={img3} alt="picture1" className="grid-item"/>
    </div>
    
    </div>
    
  );
}

export default HomePage;
