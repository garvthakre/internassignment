import React from 'react';
import { useDrop } from 'react-dnd';

// Drop area for the canvas
function CanvasDropArea({ onDrop, children, onClick }) {
  const [{ isOver }, drop] = useDrop({
    accept: 'PALETTE_ITEM',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      // You would calculate the actual position based on the canvas
      // This is simplified for the prototype
      onDrop(item.type, { x: offset.x, y: offset.y });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`relative border border-gray-300 min-h-[500px] p-5 transition-colors duration-200 ${isOver ? 'bg-blue-50' : 'bg-white'}`}
      onClick={onClick}
    >
      {isOver && (
        <div className="absolute inset-0 bg-blue-100 bg-opacity-10 pointer-events-none z-10" />
      )}
      {children}
    </div>
  );
}

export default CanvasDropArea;