import React, { useRef } from 'react'
import { useDragDrop } from '../../contexts/DragDrop';

export default function Droppable({children, className}) {
  
  const { currDraggable } = useDragDrop();
  
  const DroppableRef = useRef();
  
  const handleDragOver = (e) =>{
    e.preventDefault();
    const afterElement = getDragAfterElement(e.clientY)
    if(afterElement == null){
      DroppableRef.current.appendChild(currDraggable);
    } else {
      DroppableRef.current.insertBefore(currDraggable, afterElement);
    }
  }

  const getDragAfterElement = (y) => {
    const draggableElements = [...DroppableRef.current.querySelectorAll('[draggable="true"]')].filter(el => el != currDraggable)
    
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height/2;
      if(offset < 0 && offset > closest.offset){
        return {offset: offset, element: child}
      }else {
        return closest
      }
    }, {offset: Number.NEGATIVE_INFINITY}).element
  }
 
  return (
    <div ref={DroppableRef} onDragOver={handleDragOver} className={className}>
      {children}
    </div>
  )
}



