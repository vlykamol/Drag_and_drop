import React, { useRef } from 'react'
import { useDragDrop } from '../../contexts/DragDrop';

export default function Droppable({children, className}) {
  const { currDraggable } = useDragDrop();
  const DroppableRef = useRef();
  const handleDragOver = (e) =>{
    e.preventDefault();
    DroppableRef.current.appendChild(currDraggable);
    console.log("dragging over")
  }
  return (
    <div ref={DroppableRef} onDragOver={handleDragOver} className={className}>
      {children}
    </div>
  )
}



