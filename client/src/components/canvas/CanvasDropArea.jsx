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
      className={`canvas-drop-area ${isOver ? 'drop-hover' : ''}`}
      style={{
        backgroundColor: isOver ? '#f0f8ff' : '#ffffff',
        border: '1px solid #cccccc',
        minHeight: '500px',
        padding: '20px',
        position: 'relative',
        transition: 'background-color 0.2s ease',
      }}
      onClick={onClick}
    >
      {isOver && (
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            backgroundColor: 'rgba(0, 123, 255, 0.1)', 
            pointerEvents: 'none',
            zIndex: 1
          }} 
        />
      )}
      {children}
    </div>
  );
}

export default CanvasDropArea;