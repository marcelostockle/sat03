import React, { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import './sidebar.css'
import NestedList from './NestedList'
import content from './sidebar.json'

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
    <NestedList content={content} level={0} display={visible}/>
  </div>
}

export default Sidebar