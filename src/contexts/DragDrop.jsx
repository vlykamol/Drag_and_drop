import React, { createContext, useContext, useState } from 'react'

const DragDrop = createContext(null);

export const DragDropProvider = ({children}) => {
  const values = {}
  return(
    <DragDrop.Provider value={values}>{children}</DragDrop.Provider>
  )

}

export const useDragDrop = () => {
  return useContext(DragDrop)
}
