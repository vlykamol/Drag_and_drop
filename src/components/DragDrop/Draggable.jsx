import React, { useEffect, useRef, useState } from 'react'
import { useDragDrop } from '../../contexts/DragDrop';

export default function Draggable({ children, className }) {

  const { setCurrDraggable } = useDragDrop();

  const draggableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    setCurrDraggable(draggableRef.current);
    setIsDragging(true);
  }

  const handleDragEnd = (e) => {
    setCurrDraggable(null)
    setIsDragging(false);
  }
  return (
    <div onDragStart={handleDragStart} onDragEnd={handleDragEnd} ref={draggableRef} draggable className={`${isDragging ? 'opacity-50' : ""} ${className}`}>{children}</div>
  )
}
