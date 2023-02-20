import { Parallax } from 'react-parallax';
import Blue from '../img/blue.jpg'

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={Blue} strength={600} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content' >
            <span className='img-txt'>Landing Page , please select your options </span>
        </div>
    </Parallax>
);

export default ImageTwo