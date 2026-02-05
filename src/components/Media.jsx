import './Media.css';
import { useState, useEffect } from "react";
import bike from '../images/bike.svg'
import indianMountaineerPg1 from '../media/indianMountaineer/indianMountaineerPg1.png';
import indianMountaineerPg2 from '../media/indianMountaineer/indianMountaineerPg2.png';
import indianMountaineerPg3 from '../media/indianMountaineer/indianMountaineerPg3.png';
import indianMountaineerPg4 from '../media/indianMountaineer/indianMountaineerPg4.png';
import indianMountaineerPg5 from '../media/indianMountaineer/indianMountaineerPg5.png';
import indianMountaineerPg6 from '../media/indianMountaineer/indianMountaineerPg6.png';
import indianMountaineerPg7 from '../media/indianMountaineer/indianMountaineerPg7.png';
import indianMountaineerPg8 from '../media/indianMountaineer/indianMountaineerPg8.png';
import indianMountaineerPg9 from '../media/indianMountaineer/indianMountaineerPg9.png';
import indianMountaineerPg10 from '../media/indianMountaineer/indianMountaineerPg10.png';
import indianMountaineerPg11 from '../media/indianMountaineer/indianMountaineerPg11.png';
import WWFpg1 from '../media/WWF/WWFpg1.jpg';
import WWFpg2 from '../media/WWF/WWFpg2.jpg';
import WWFpg3 from '../media/WWF/WWFpg3.jpg';
import WWFpg4 from '../media/WWF/WWFpg4.jpg';
import upbeatPg1 from '../media/upbeat/upbeatPg1.jpg';
import upbeatPg2 from '../media/upbeat/upbeatPg2.jpg';
import upbeatPg3 from '../media/upbeat/upbeatPg3.jpg';
import upbeatPg4 from '../media/upbeat/upbeatPg4.jpg';


const indianMountaineerImages = [
    indianMountaineerPg1,
    indianMountaineerPg2,
    indianMountaineerPg3,
    indianMountaineerPg4,
    indianMountaineerPg5,
    indianMountaineerPg6,
    indianMountaineerPg7,
    indianMountaineerPg8,
    indianMountaineerPg9,
    indianMountaineerPg10,
    indianMountaineerPg11
]

const wwfImages = [
    WWFpg1, 
    WWFpg2,
    WWFpg3,
    WWFpg4
]

const upbeatImages = [
    upbeatPg1, 
    upbeatPg2,
    upbeatPg3,
    upbeatPg4
]

const Media = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [currentImages, setCurrentImages] = useState([])

    
    const openBook = (images) => {
        setCurrentImages(images)
        setIndex(0);
        setIsOpen(true);
    }

    const closeBook = () => setIsOpen(false);

    const nextPage = () =>
        setIndex((i) => (i + 1) % currentImages.length);

    const prevPage = () =>
        setIndex((i) => (i - 1 + currentImages.length) % currentImages.length);

    useEffect(() => {
        if (!isOpen) return;

        const handleKey = (e) => {
            if (e.key === "ArrowRight") nextPage();
            if (e.key === "ArrowLeft") prevPage();
            if (e.key === "Escape") closeBook();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    });


    return (
        // <div className='about-grid'>
        <div>
            <div className="about-text">
                <img src={bike} alt='icon' style={{ width: '80px', marginBottom: '0px' }} />
                <h2> Media </h2>
                <p> The Himalayas revered for centuries as the abode of the Gods, have been a source of inspiration for man since aeons.
                </p> <p>
                    On March 20th, 1986, we set out on a mission to know our Himalayas.</p>
            </div>
            <div className='book-box'> 
            <div className='book' onClick={openBook}>
                {indianMountaineerImages.map((img, i) => (
                    <img key={i} src={img} alt={`Indiann Mountaineer Page ${i + 1}`} />
                ))}
            </div>

           <div className='book' onClick={() => openBook(wwfImages)}>
                {wwfImages.map((img, i) => (
                    <img key={i} src={img} alt={`WWF Page ${i + 1}`} />
                ))}
            </div>

                       <div className='book' onClick={() => openBook(upbeatImages)}>
                {upbeatImages.map((img, i) => (
                    <img key={i} src={img} alt={`Upbeat Page ${i + 1}`} />
                ))}
            </div>
            </div>

            {isOpen && (
                <div className="overlay" onClick={closeBook}>
                    <button
                        className="close"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeBook();
                        }}
                        aria-label="Close"
                    ></button>
                    <button className="nav left" onClick={(e) => {
                        e.stopPropagation();
                        prevPage();
                    }}>‹</button>
                    <img src={indianMountaineerImages[index]}
                        alt={`Page ${index + 1}`}
                        onClick={(e) => e.stopPropagation()} />
                    <button className="nav right" onClick={(e) => {
                        e.stopPropagation();
                        nextPage();
                    }}>›</button>
                </div>
            )}

        </div>
    );
}

export default Media;