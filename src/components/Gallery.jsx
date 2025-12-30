import gallery1 from '../images/gallery1.jpg';
import gallery2 from '../images/gallery2.jpg';
import gallery3 from '../images/gallery3.jpg';
import gallery4 from '../images/gallery4.jpg';
import gallery5 from '../images/gallery5.jpg';
import gallery6 from '../images/gallery6.jpg';
import gallery7 from '../images/gallery7.jpg';
import gallery8 from '../images/gallery8.jpg';
import gallery9 from '../images/gallery9.jpg';
import gallery10 from '../images/gallery10.jpg';
import gallery11 from '../images/gallery11.jpg';
import gallery12 from '../images/gallery12.jpg';
import gallery13 from '../images/gallery13.jpg';
import gallery14 from '../images/gallery14.jpg';
import gallery15 from '../images/gallery15.jpg';
import gallery16 from '../images/gallery16.jpg';
import gallery17 from '../images/gallery17.jpg';
import gallery18 from '../images/gallery18.jpg';
import gallery19 from '../images/gallery19.jpg';
import gallery20 from '../images/gallery20.jpg';
import img9 from '../images/img9.jpg';
import gallery22 from '../images/gallery22.jpg';
import gallery23 from '../images/gallery23.jpg';
import gallery24 from '../images/gallery24.jpg';
import gallery25 from '../images/gallery25.jpg';
import gallery26 from '../images/gallery26.jpg';
import gallery27 from '../images/gallery27.jpg';
import gallery28 from '../images/gallery28.jpg';
import gallery29 from '../images/gallery29.jpg';
import gallery30 from '../images/gallery30.jpg';
import gallery31 from '../images/gallery31.jpg';
import gallery32 from '../images/gallery32.jpg';
import gallery33 from '../images/gallery33.jpg';
import gallery34 from '../images/gallery34.jpg';
import gallery35 from '../images/gallery35.jpg';
import gallery36 from '../images/gallery36.jpg';
import gallery37 from '../images/gallery37.jpg';
import gallery38 from '../images/gallery38.jpg';
import gallery39 from '../images/gallery39.jpg';
import gallery40 from '../images/gallery40.jpg';
import gallery41 from '../images/gallery41.jpg';
import gallery42 from '../images/gallery42.jpg';
import gallery43 from '../images/gallery43.jpg';
import gallery44 from '../images/gallery44.jpg';
import gallery45 from '../images/gallery45.jpg';
import gallery46 from '../images/gallery46.jpg';
import gallery47 from '../images/gallery47.jpg';
import gallery48 from '../images/gallery48.jpg';
import gallery49 from '../images/gallery49.jpg';
import gallery50 from '../images/gallery50.jpg';
import gallery51 from '../images/gallery51.jpg';
import gallery52 from '../images/gallery52.jpg';
import gallery53 from '../images/gallery53.jpg';
import gallery54 from '../images/gallery54.jpg';
import gallery55 from '../images/gallery55.jpg';
import gallery56 from '../images/gallery56.jpg';
import gallery57 from '../images/gallery57.jpg';
import gallery58 from '../images/gallery58.jpg';
import gallery59 from '../images/gallery59.jpg';
import gallery60 from '../images/gallery60.jpg';
import gallery61 from '../images/gallery61.jpg';
import gallery62 from '../images/gallery62.jpg';
import gallery63 from '../images/gallery63.jpg';
import gallery64 from '../images/gallery64.jpg';
import gallery65 from '../images/gallery65.jpg';
import './Gallery.css';

const largeImages = [
  gallery41,
  gallery5,
  gallery1,
  gallery14,
  gallery22,
  gallery30,
  gallery42,
  gallery46
];

const smallImages = [
  gallery2, gallery3, gallery4, gallery6, gallery7, gallery8,    
  gallery10, gallery11, gallery12, gallery13,
  gallery15, gallery16, gallery17, gallery55, gallery19, gallery18,
  gallery23, gallery24, gallery25, gallery26, gallery27, 
  gallery28, gallery29, gallery31, gallery32, gallery33, gallery34,
  gallery35, gallery36, gallery43, gallery37, gallery38, gallery39, gallery40,
  gallery9, img9, gallery44, gallery45, gallery20,
  gallery47, gallery50,  gallery48, gallery49, gallery51, gallery52,
  gallery53, gallery54, gallery56, gallery57, gallery58, gallery59,
  gallery60, gallery61, gallery62, gallery63, gallery64, gallery65
];

const Gallery = () => {
  return (
    <div className="gallery-wall">
      {largeImages.map((img, index) => (
        <div className="gallery-item large" key={`large-${index}`}>
          <img src={img} alt="gallery large" />
        </div>
      ))}

      {smallImages.map((img, index) => (
        <div className="gallery-item small" key={`small-${index}`}>
          <img src={img} alt="gallery small" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;