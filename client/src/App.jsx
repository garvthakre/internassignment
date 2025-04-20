import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WebsiteBuilder from "./components/WebsiteBuilder";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <WebsiteBuilder />
    
  </DndProvider>
  
  )
}

export default App