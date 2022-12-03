import React from 'react'
import Sidebar from './Sidebar'
import OceanChart from './OceanChart'
import './home.css'

const HomePage = () => {
  return <div className='container'>
    <div className='left-div'>
      <Sidebar/>
    </div>
    <OceanChart/>
  </div>
}

export default HomePage