import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './sidebar.css'

const NestedList = (props) => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(Array(props.content.length).fill(false))
  const visibleStyle = (b) => b ? 'flex' : 'none'

  return (<ul className='sidebar-list'
    style={{
      display: visibleStyle(props.display),
      marginLeft: `${(10 * props.level)}px`
    }}
  >
    {props.content.map((content, i) => {
      return (<li
          key={`sidebaritem-${props.level}-${i}`}
          className='sidebar-list-item'
          onClick={(event)=> {
            event.stopPropagation()
            if (content.link) {
              navigate(content.link)
            } else {
              setVisible(visible.map((v, set_i) => set_i === i ? !v : v))
            }
          }}
        >
        { content.title }
        { content.child 
          ? <NestedList content={content.child} level={props.level+1} display={visible[i]}/> 
          : ""
        }
      </li>)
    })}
  </ul>)
}

export default NestedList