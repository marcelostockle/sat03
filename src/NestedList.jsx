import React, { useState } from 'react'
import './sidebar.css'

const NestedList = (props) => {
  const [visible, setVisible] = useState(Array(props.content.length).fill(false))
  const visibleStyle = (b) => b ? 'flex' : 'none'
  const linkWrapper = (content, link) => {
    return link ? <a href={link}>{content}</a> : content
  }

  return (<ul className='sidebar-list'
    style={{
      display: visibleStyle(props.display),
      marginLeft: `${(10 * props.level)}px`
    }}
  >
    {props.content.map((content, i) => {
      return linkWrapper(
        <li
          key={`sidebaritem-${props.level}-${i}`}
          className='sidebar-list-item'
          onClick={(event)=> {
            event.stopPropagation()
            if (!content.link) {
              setVisible(visible.map((v, set_i) => set_i === i ? !v : v))
            }
          }}
        >
        { content.title }
        { content.child 
          ? <NestedList content={content.child} level={props.level+1} display={visible[i]}/> 
          : ""
        }
      </li>
      , content.link)
    })}
  </ul>)
}

export default NestedList