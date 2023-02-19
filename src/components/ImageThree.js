import { Parallax } from 'react-parallax';
import View from '../img/view.jpg'

const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={View} strength={600} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content' >
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageThree