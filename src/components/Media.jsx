import './Media.css';
import ImageStack from './ImageStack';
import img1 from '../pdfs/DOC0424.jpg';
import img2 from '../pdfs/DOC0422.jpg';
import img3 from '../pdfs/DOC0423.jpg';
import img4 from '../pdfs/DOC0421.jpg';
import img5 from '../pdfs/DOC0441.jpg';
import img6 from '../pdfs/DOC0442.jpg';
import img7 from '../pdfs/DOC0443.jpg';
import img8 from '../pdfs/DOC043.jpg';
import img9 from '../pdfs/DOC041_page-0001.jpg';
import img10 from '../pdfs/DOC041_page-0002.jpg';
import img11 from '../pdfs/DOC041_page-0003.jpg';
import img12 from '../pdfs/DOC041_page-0004.jpg';
import img13 from '../pdfs/DOC041_page-0005.jpg';
import img14 from '../pdfs/DOC041_page-0006.jpg';
import img15 from '../pdfs/DOC041_page-0007.jpg';
import img16 from '../pdfs/DOC041_page-0008.jpg';
import img17 from '../pdfs/DOC041_page-0009.jpg';
import img18 from '../pdfs/DOC041_page-0010.jpg';
import img19 from '../pdfs/DOC041_page-0011.jpg' ;

const Media = () => {
    const stackOne = [
        img1,
        img2,
        img3,
        img4
    ];

    const stackTwo = [
        img5, img6, img7
    ];

    const stackThree = [img8];

    const stackFour = [img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19];

    return (
        <div>
            <div className='media-text'>
            <h1> Media </h1>
            </div>
                <div id="grid">

                    <ImageStack images={stackOne} />

                    <ImageStack images={stackTwo} />

                    <ImageStack images={stackThree} />

                    <ImageStack images={stackFour} />
                    
                </div>
        </div>
    )
}

export default Media