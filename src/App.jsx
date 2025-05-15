import { useState } from 'react'
import { DragDropProvider } from './contexts/DragDrop'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <DragDropProvider>
      <Dashboard />
    </DragDropProvider>
  )
}

export default App