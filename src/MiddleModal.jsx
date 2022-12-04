import React, { useState } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'
import { useModalContext } from './ModalContext'
import styled from 'styled-components'
import PlotTab from './PlotTab';
import './MiddleModal.css'

const MiddleModal = () => {
  const {modal, closeModal} = useModalContext()
  const [showData, setShowData] = useState(false)
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
  const Tabs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `
  const Tab = styled.h4`
    text-align: center;
    border-style: outset;
    border-width: 1px;
    background-color: whitesmoke;
    padding-inline: 20px;
    &:hover {
      border-style: ridge;
    }
  `
  const conditionalInfo = () => {
    if (showData) {
      return <PlotTab/>
    } else {
      return (<>
        <ContainedImg src={modal.pic}/>
        <p style={{textAlign: 'justify'}}>{modal.text}</p>
      </>)
    }
  }
  const conditionalTabs = () => {
    if (modal.data) {
      return <Tabs>
        <Tab onClick={() => setShowData(false)}>Info</Tab>
        <Tab onClick={() => setShowData(true)}>Datos</Tab>
      </Tabs>
    }
  }
  return (
    <div className='parent-container' style={{display: modal.active ? 'flex' : 'none'}}>
      <AiFillCloseSquare className='close-btn' size={'2em'} onClick={() => closeModal()}/>
      <div className='modal-container'>
        <Title>{modal.title}</Title>
        { conditionalTabs() }
        { conditionalInfo() }
      </div>
    </div>
  )
}

export default MiddleModal