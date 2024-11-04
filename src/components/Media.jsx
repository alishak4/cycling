// import doc from '../pdfs/doc.pdf';
import ImageStack from './ImageStack';
import img1 from '../pdfs/DOC0424.jpg';
import img2 from '../pdfs/DOC0422.jpg';
import img3 from '../pdfs/DOC0423.jpg';
import img4 from '../pdfs/DOC0421.jpg';
import img5 from '../pdfs/DOC0441.jpg';
import img6 from '../pdfs/DOC0442.jpg';
import img7 from '../pdfs/DOC0443.jpg';

const Media = () => {
    const images = [
        img1,
        img2,
        img3,
        img4
    ];

    const images_2 = [
        img5, img6, img7
    ];
    return (
        <div>
            <h1> Media </h1>
            <ImageStack images={images} />


            {/* <div style={{
                width: '800px',
                height: '800px',
                border: '1px solid #ccc', // Add a light border around the box
                overflow: 'hidden', // Hide any overflow from the iframe
                borderRadius: '8px', // Optional: Rounded corners for the box
            }}> */}
                <ImageStack images={images_2} />
            </div>
        // </div>
    )
}

export default Media