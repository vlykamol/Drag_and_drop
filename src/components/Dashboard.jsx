import React from 'react'
import { useDragDrop } from '../contexts/DragDrop'
import Droppable from './DragDrop/Droppable';
import Draggable from './DragDrop/Draggable';

export default function Dashboard() {
  return (
    <div className='w-full text-black flex gap-1 justify-between'>
      <Droppable className='grow p-6 bg-cyan-700 min-h-screen' >
        {[1, 2, 5, 6].map((num, key) => {
          return <Draggable key={key}>
            <Card num={num} />
          </Draggable>
        })}
      </Droppable>
      
      <Droppable className='grow p-6 bg-cyan-800 min-h-screen' >
        {[3,4, 7, 8].map((num, key) => {
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
      <div className="bg-white shadow-md rounded-2xl p-4 w-full border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">card</h2>
      <p className="text-gray-600">{num}</p>
    </div>
    </div>
  )
}