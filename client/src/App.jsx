import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WebsiteBuilder from "./components/WebsiteBuilder";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <WebsiteBuilder />
    <h1 className="text-8xl font-italic underline">
      Hello world!
    </h1>
  </DndProvider>
  
  )
}

export default App