import React from 'react';
import { useDrag } from 'react-dnd';

// Drag source for palette items
function DraggableElementType({ type, name, icon }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'PALETTE_ITEM',
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`w-24 h-20 border border-gray-300 rounded flex flex-col items-center justify-center cursor-move bg-white transition-all duration-200 
        ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="text-2xl mb-1.5">{icon}</div>
      <div>{name}</div>
    </div>
  );
}

export default DraggableElementType;