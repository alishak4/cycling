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
    console.log("hello")
  return (
    <div> 
    <div className="grid">
    <img src="https://github.com/alishak4/cycling/assets/69810932/087b0d50-a15f-47e4-906d-d2f5213bc6de" alt="picture1" className="grid-item"/>
    <img src="https://github.com/alishak4/cycling/assets/69810932/52f8eb6a-4cb1-4ef7-bca9-7ee8f18e130d" alt="picture2" className="grid-item"/>
    <img src="https://github.com/alishak4/cycling/assets/69810932/e682811a-9b8c-405f-83a5-67b003f0ef10" alt="picture3" className="grid-item"/>
    <img src="https://github.com/alishak4/cycling/assets/69810932/1720939f-cbe2-4656-b609-3ee960e7e6e7" alt="picture4" className="grid-item"/>

    <div className="middle">
    <div className="centered">
    <h1> The Himalayan Odyssey </h1>
    <img src={bike} alt="cycle" />
    <div className="button-group">
              <Link to="/map"> <button className="button"> Map </button>  </Link>
              <Link to="/about"> <button className="button"> About </button>  </Link>
              <Link to="/route"> <button className="button"> Route </button>  </Link>
            </div>
            <div className="button-group">
              <Link to="/route"> <button className="button"> Team </button>  </Link>
              <Link to="/media"> <button className="button"> Media </button>  </Link>
            </div>
          </div>
        </div>
    <img src="https://github.com/alishak4/cycling/assets/69810932/52d6c423-3765-4e2b-a0b3-f9cd23b37eff" alt="picture5" className="grid-item"/>
    </div>
    
    </div>
    
  );
}

export default HomePage;
