import React, { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import './sidebar.css'
import NestedList from './NestedList'
import content from './sidebar.json'

const Sidebar = () => {
  const [visible, setVisible] = useState(false)

  return <div className='sidebar'>
    <AiOutlineBars
      size='2em'
      className='menu-toggle'
      onClick={() => setVisible(!visible)}
    />
    <NestedList content={content} level={0} display={visible}/>
  </div>
}

export default Sidebar