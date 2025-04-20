import React from 'react';

// Preview toggle component
function ResponsivePreviewToggle({ activeDevice, onDeviceChange }) {
  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <button 
        style={{
          background: activeDevice === 'desktop' ? '#007bff' : 'none',
          color: activeDevice === 'desktop' ? 'white' : 'inherit',
          border: '1px solid #dee2e6',
          borderRadius: '4px',
          padding: '5px 10px',
          cursor: 'pointer',
        }}
        onClick={() => onDeviceChange('desktop')}
      >
        Desktop
      </button>
      <button 
        style={{
          background: activeDevice === 'tablet' ? '#007bff' : 'none',
          color: activeDevice === 'tablet' ? 'white' : 'inherit',
          border: '1px solid #dee2e6',
          borderRadius: '4px',
          padding: '5px 10px',
          cursor: 'pointer',
        }}
        onClick={() => onDeviceChange('tablet')}
      >
        Tablet
      </button>
      <button 
        style={{
          background: activeDevice === 'mobile' ? '#007bff' : 'none',
          color: activeDevice === 'mobile' ? 'white' : 'inherit',
          border: '1px solid #dee2e6',
          borderRadius: '4px',
          padding: '5px 10px',
          cursor: 'pointer',
        }}
        onClick={() => onDeviceChange('mobile')}
      >
        Mobile
      </button>
    </div>
  );
}

export default ResponsivePreviewToggle;