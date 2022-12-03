import React, { useEffect, useState } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'
import { useModalContext } from './ModalContext'
import styled from 'styled-components'
import './MiddleModal.css'

const MiddleModal = () => {
  const {modal, closeModal} = useModalContext()
  const Title = styled.h3`
    text-align: center;
    border-style: solid;
    border-color: blue;
    border-radius: 15px;
  `
  const ContainedImg = styled.img`
    max-height: 40vh;
    object-fit: contain;
  `
  return (
    <div className='parent-container' style={{display: modal.active ? 'flex' : 'none'}}>
      <AiFillCloseSquare className='close-btn' size={'2em'} onClick={() => closeModal()}/>
      <div className='modal-container'>
        <Title>{modal.title}</Title>
        <ContainedImg src={modal.pic}/>
        <p style={{textAlign: 'justify'}}>{modal.text}</p>
      </div>
    </div>
  )
}

export default MiddleModal