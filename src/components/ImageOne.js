import { Parallax } from 'react-parallax';
import Earth from '../img/earth.jpg'

const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={Earth} strength={600} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content' >
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne