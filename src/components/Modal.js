import React from 'react';
import Astronaut from './Astronaut.jpg';
import './Modal.css';

const Modal = ({open, onClose}) => {
  if (!open) return null
  return (
    <div onClick={onClose} className='overlay1' >
        <div onClick={(e)=> {
        e.stopPropagation()
        }} className="modalContainer1">
            
                <img src={Astronaut} alt="" className='img1' />
            
            <div className="modalRight1">
                <p onClick={onClose} className="closeBtn1">X</p>
                <div className="content1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal
