import React from "react";
import './HomePage.css';
import img7 from '../images/img7.jpg';
import bike from '../images/bike.svg'

const Media = () => {
    return (
        <div className='about-grid'>
            <div className="about-text">
                <img src={bike} alt='icon' style={{ width: '80px', marginBottom: '0px' }} />
                <h2> Media </h2>
                <p> The Himalayas revered for centuries as the abode of the Gods, have been a source of inspiration for man since aeons.
                </p> <p>
                    On March 20th, 1986, we set out on a mission to know our Himalayas.</p>
            </div>
            {/* <div className="about-image">
                <img src={img7} alt="img" className="about-image" />
            </div> */}
        </div>
    );
}

export default Media;