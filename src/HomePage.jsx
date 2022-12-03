import React from 'react'
import Sidebar from './Sidebar'
import OceanChart from './OceanChart'
import { ModalProvider } from './ModalContext'
import './home.css'
import MiddleModal from './MiddleModal'

const HomePage = () => {
  return <ModalProvider>
      <div className='container'>
        <div className='left-div'>
          <Sidebar/>
        </div>
        <OceanChart/>
        <MiddleModal/>
      </div>
    </ModalProvider>
}

export default HomePage