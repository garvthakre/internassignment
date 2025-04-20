import React from 'react';

// Preview toggle component
function ResponsivePreviewToggle({ activeDevice, onDeviceChange }) {
  return (
    <div className="flex gap-1.5">
      <button 
        className={`border border-gray-300 rounded px-2.5 py-1.5 cursor-pointer 
          ${activeDevice === 'desktop' ? 'bg-blue-500 text-white' : 'bg-transparent text-inherit'}`}
        onClick={() => onDeviceChange('desktop')}
      >
        Desktop
      </button>
      <button 
        className={`border border-gray-300 rounded px-2.5 py-1.5 cursor-pointer 
          ${activeDevice === 'tablet' ? 'bg-blue-500 text-white' : 'bg-transparent text-inherit'}`}
        onClick={() => onDeviceChange('tablet')}
      >
        Tablet
      </button>
      <button 
        className={`border border-gray-300 rounded px-2.5 py-1.5 cursor-pointer 
          ${activeDevice === 'mobile' ? 'bg-blue-500 text-white' : 'bg-transparent text-inherit'}`}
        onClick={() => onDeviceChange('mobile')}
      >
        Mobile
      </button>
    </div>
  );
}

export default ResponsivePreviewToggle;