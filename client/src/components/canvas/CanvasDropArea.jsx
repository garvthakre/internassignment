import React from 'react';
import { useDrop } from 'react-dnd';
 
function CanvasDropArea({ onDrop, children, onClick, isPreviewMode }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'PALETTE_ITEM',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      // You would calculate the actual position based on the canvas
 
      onDrop(item.type, { x: offset.x, y: offset.y });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    // Disable dropping in preview mode
    canDrop: () => !isPreviewMode
  });

  return (
    <div
      ref={drop}
      className={`relative min-h-full p-5 transition-all duration-200
        ${isPreviewMode 
          ? 'bg-white cursor-default' 
          : `${isOver ? 'bg-blue-50' : 'bg-white'} cursor-pointer border border-gray-300`}
        ${canDrop && isOver ? 'ring-2 ring-blue-300' : ''}
      `}
      onClick={isPreviewMode ? undefined : onClick}
    >
      {/* Visual indicator for drop area */}
      {isOver && canDrop && (
        <div className="absolute inset-0 border-2 border-blue-400 border-dashed pointer-events-none z-10 flex items-center justify-center">
          <div className="bg-blue-100 bg-opacity-90 text-blue-700 px-4 py-2 rounded-md font-medium">
            Drop element here
          </div>
        </div>
      )}
      
      {/* Preview mode indicator */}
      {isPreviewMode && (
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
          Preview Mode
        </div>
      )}
      
      {children}
      
      {/* Helpful placeholder when canvas is empty */}
      {!children.length && !isOver && !isPreviewMode && (
        <div className="border-2 border-gray-200 border-dashed rounded-lg h-full min-h-[400px] flex items-center justify-center">
          <div className="text-center text-gray-400">
            <p className="mb-4">Your canvas is empty</p>
            <p className="text-sm">Drag elements from the palette to start building</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CanvasDropArea;