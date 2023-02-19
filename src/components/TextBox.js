import React, {useState} from 'react';
import Modal from './Modal';
import './Modal.css'

const TextBox = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='text-box' >
        <h3>First Class Ticket</h3>
        <div>
          <button className='modalBtn1' onClick={() => setOpenModal(true)} >Start</button>
          <Modal open={openModal} onClose={()=> setOpenModal(false)} />
        </div>
    </div>
  )
}

export default TextBox