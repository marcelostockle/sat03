import React, { useEffect, useState } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'
import { useModalContext } from './ModalContext'
import './MiddleModal.css'

const MiddleModal = () => {
  const {modal, closeModal} = useModalContext()
  return (
    <div className='parent-container' style={{display: modal.active ? 'flex' : 'none'}}>
      <AiFillCloseSquare className='close-btn' size={'2em'} onClick={() => closeModal()}/>
      <div className='modal-container'>
        <h3 style={{textAlign: 'center'}}>{modal.title}</h3>
        <img src={modal.pic}/>
        <p style={{textAlign: 'justify'}}>{modal.text}</p>
      </div>
    </div>
  )
}

export default MiddleModal