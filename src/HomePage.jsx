import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { ModalProvider } from './ModalContext'
import './home.css'
import MiddleModal from './MiddleModal'

const HomePage = () => {
  useEffect(() => { document.title='Oceano Profundo' }, [])
  return <ModalProvider>
      <div className='container'>
        <div className='home-title'>
          <h1 style={{fontSize:'xx-large'}}>
            Conservación de la diversidad desconocida en el océano profundo
          </h1>
          <h3 style={{color:'white'}}>95% Biosfera global</h3>
          <h3 style={{color:'white'}}>5% Explorado</h3>
          <h3 style={{color:'white'}}>1% Diversidad identificada</h3>
        </div>
        <div className='left-div'>
          <Sidebar/>
        </div>
        <MiddleModal/>
        <div className='logos'>
          <img src='ANID_MILENIO.png'/>
          <img src='Escudo-UdeC_300x233.png'/>
          <img src='imo.png'/>
        </div>
        <img
          src="ninosimbolo.png"
          style={{
            position: "absolute",
            right: "10vw",
            bottom: "30vh",
            maxWidth: "150px"
          }}
        />
      </div>
    </ModalProvider>
}

export default HomePage