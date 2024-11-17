import React from "react";
import './HomePage.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import mountains from '../images/mountains.jpg';
// import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img4 from '../images/img4.jpg';
import bike from '../images/bike.svg';

const HomePage = () => {
  return (
    <div> 
    <div className="grid">
    <img src={img2} alt="picture1" className="grid-item"/>
    <img src={img5} alt="picture2" className="grid-item"/>
    <img src={img6} alt="picture3" className="grid-item"/>
    <img src={img4} alt="picture4" className="grid-item"/>

    <div className="middle">
    <h1> The Himalayan Odyssey </h1>
    <img src={bike} alt="cycle" />
    <div className="button-group">
    <Link to="/map"> <button className="button"> Map </button>  </Link>
    <Link to="/about"> <button className="button"> About </button>  </Link>
    <Link to="/route"> <button className="button"> Route </button>  </Link>
   
    <Link to="/route"> <button className="button"> Team </button>  </Link>
    <Link to="/media"> <button className="button"> Media </button>  </Link>

    </div>
    </div>
    <img src={img3} alt="picture5" className="grid-item"/>
    </div>
    
    </div>
    
  );
}

export default HomePage;
