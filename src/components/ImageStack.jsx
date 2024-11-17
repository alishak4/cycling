import React, { useState } from 'react';

const ImageStack = ({ images }) => {
    const [isStackExpanded, setIsStackExpanded] = useState(false);  // Manages stack expansion
    const [zoomedImageIndex, setZoomedImageIndex] = useState(null); // Manages which image is zoomed

    const toggleStackExpansion = () => {
        if (zoomedImageIndex !== null) {
            // If an image is zoomed, reset it back to expanded stack view
            setZoomedImageIndex(null);
        } else {
            // Toggle between expanded and collapsed stack views
            setIsStackExpanded(!isStackExpanded);
        }
    };

    const handleImageClick = (index) => {
        if (isStackExpanded) {
            // Only zoom an image if stack is already expanded
            setZoomedImageIndex(zoomedImageIndex === index ? null : index); // Toggle zoomed state
        }
    };

    return (
        <div
            onClick={toggleStackExpansion}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                transform: isStackExpanded && zoomedImageIndex === null ? 'scale(1.5)' : 'scale(1)',
            }}
        >
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt='Stacked'
                    onClick={() => {
                        handleImageClick(index);
                    }}
                    style={{
                        width: zoomedImageIndex === index ? '400px' : '150px', // Larger size for zoomed image
                        height: 'auto',
                        marginTop: isStackExpanded ? '10px' : index === 0 ? '0px' : `-${index * 90}px`, // Adjust stack spacing
                        transition: 'margin 0.3s ease, width 0.3s ease, transform 0.3s ease',
                        boxShadow: zoomedImageIndex === index
                            ? '0px 8px 16px rgba(0, 0, 0, 0.5)'
                            : isStackExpanded
                            ? '0px 4px 8px rgba(0, 0, 0, 0.3)'
                            : '0px 2px 4px rgba(0, 0, 0, 0.2)',
                        transform: `rotate(${index % 2 === 0 ? -5 : 5}deg)`,
                        zIndex: zoomedImageIndex === index ? 1 : 0, // Bring zoomed image to front
                    }}
                />
            ))}
        </div>
    );
};

export default ImageStack;
