import React from "react";
import './HomePage.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import mountains from '../images/mountains.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img4 from '../images/img4.jpg';
import bike from '../images/bike.svg';

const HomePage = () => {
    console.log("hello")
  return (
    <div> 
    <div className="centered">
      {/* <h1> The Himalayan Odyssey </h1> */}
      <img src={mountains} alt="mountains" />
      <p> The Himalayas revered for centuries as the abode of the Gods, have been a source of inspiration for man since aeons.</p> 
     <p>On March 20th, 1986, we set out on a mission to know our Himalayas.</p>
    </div>
    <div className="grid">
    <img src={img2} alt="picture1" className="grid-item"/>
    <img src={img5} alt="picture2" className="grid-item"/>
    <img src={img6} alt="picture3" className="grid-item"/>
    <img src={img4} alt="picture3" className="grid-item"/>
    <div className="centered">
    <h1> The Himalayan Odyssey </h1>
    <img src={bike} alt="cycle" />
    <div className="button-group">
    <Link to="/map"> <button className="button"> Map </button>  </Link>
    <Link to="/about"> <button className="button"> About </button>  </Link>
    </div>
    </div>
 
    <img src={img3} alt="picture3" className="grid-item"/>
    </div>
    
    </div>
    
  );
}

export default HomePage;
