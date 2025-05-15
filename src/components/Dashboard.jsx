import React from 'react'
import { useDragDrop } from '../contexts/DragDrop'

export default function Dashboard() {
  const {} = useDragDrop();
  return (
    <div className='w-full text-black flex gap-1 justify-between'>
      <div className='grow p-2 bg-cyan-600'>
        {[1,2,3,4].map((num, key) => {
          return <Card num={num} key={key} />
        })}
      </div>

      <div className='grow p-2 bg-cyan-800'> 
        {[1,2,3,4].map((num, key) => {
          return <Card num={num} key={key} />
        })}</div>      
    </div>
  )
}


function Card({num}){
  return(
    <div className='border-2 p-0.5 my-1'>
      card {num}
    </div>
  )
}