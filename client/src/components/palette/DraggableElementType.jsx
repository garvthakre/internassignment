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
      className={`palette-item ${isDragging ? 'dragging' : ''}`}
      style={{ 
        opacity: isDragging ? 0.5 : 1,
        width: '100px',
        height: '80px',
        border: '1px solid #dee2e6',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'move',
        backgroundColor: 'white',
        transition: 'all 0.2s ease',
      }}
    >
      <div style={{ fontSize: '24px', marginBottom: '5px' }}>{icon}</div>
      <div>{name}</div>
    </div>
  );
}

export default DraggableElementType;