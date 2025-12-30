
import { Map } from './Map';
import bike from '../images/bike.svg';

const MapComponent = () => {

  return (
    <div>
      <img src={bike} alt='icon' style={{ width: '80px', display: 'block', margin: '0 auto' }} />
      <Map/>
    </div>
  );
};

export default MapComponent;