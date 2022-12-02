import React, { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import './sidebar.css'

const Sidebar = () => {
  const [visible, setVisible] = useState(false)
  const visibleStyle = (b) => b ? 'flex' : 'none'
  const visibleBackground = (b) => b ? 'grey' : 'transparent'

  return <div className='sidebar' style={{ backgroundColor: visibleBackground(visible)}}>
    <AiOutlineBars
      size='2em'
      className='menu-toggle'
      onClick={() => setVisible(!visible)}
    />
    <ul className='sidebar-list' style={{ display: visibleStyle(visible) }}>
      <li className='sidebar-list-item'>
        Testing
      </li>
      <li className='sidebar-list-item'>
        Testing
      </li>
      <li className='sidebar-list-item'>
        Testing
      </li>
    </ul>
  </div>
}

export default Sidebar