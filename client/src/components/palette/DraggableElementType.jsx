import React from 'react';
import { useDrag } from 'react-dnd';

 
function DraggableElementType({ type, name, icon, isMobileView }) {
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
      className={`relative ${isMobileView ? 'w-20 h-16' : 'w-28 h-24'} border border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-move
        ${isDragging 
          ? 'opacity-50 border-dashed border-blue-400' 
          : 'opacity-100 hover:border-blue-400 hover:shadow-md'} 
        transition-all duration-200 group touch-manipulation`}
    >
      {/* Improved visual feedback for dragging */}
      <div className={`absolute inset-0 bg-blue-50 rounded-lg ${isDragging ? 'opacity-20' : 'opacity-0'} transition-opacity`}></div>
      
      {/* Icon with improved styling */}
      <div className={`${isMobileView ? 'text-xl' : 'text-2xl'} mb-1 sm:mb-2 p-1.5 sm:p-2 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors`}>
        {icon}
      </div>
      
      {/* Element name */}
      <div className={`${isMobileView ? 'text-xs' : 'text-sm'} font-medium`}>{name}</div>
      
      {/* Drag indicator - only visible on hover, modified for touch */}
      <div className="absolute top-1 right-1 bg-blue-100 text-blue-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontSize: '8px' }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default DraggableElementType;