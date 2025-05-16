import React from 'react'
import { useDragDrop } from '../contexts/DragDrop'
import Droppable from './DragDrop/Droppable';
import Draggable from './DragDrop/Draggable';

export default function Dashboard() {
  const {} = useDragDrop();
  return (
    <div className='w-full text-black flex gap-1 justify-between'>
      <Droppable className='grow p-2 bg-cyan-700' >
        {[1].map((num, key) => {
          return <Draggable key={key}>
            <Card num={num} />
          </Draggable>
        })}
      </Droppable>
      
      <Droppable className='grow p-2 bg-cyan-800' >
        {[2].map((num, key) => {
          return <Draggable key={key} >
            <Card num={num}/>
          </Draggable>
        })}
      </Droppable>
    </div>
  )
}


function Card({num}){
  return(
    <div className='border-2 p-0.5 my-1 bg-blue-200'>
      card {num}
    </div>
  )
}