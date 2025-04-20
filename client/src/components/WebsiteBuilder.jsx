import React, { useState, useReducer } from 'react';
import { X, Eye, Laptop, Tablet, Smartphone, ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
import ElementPalette from './palette/ElementPalette';
import CanvasDropArea from './canvas/CanvasDropArea';
import CanvasElement from './canvas/CanvasElement';
import PropertyEditor from "./property/PropertyEditor";
import { builderReducer, initialState } from '../reducers/builderReducer';

// Main website builder component with improved design
function WebsiteBuilder() {
  const [state, dispatch] = useReducer(builderReducer, initialState);
  const [activeDevice, setActiveDevice] = useState('desktop');
  const [isPaletteCollapsed, setPaletteCollapsed] = useState(false);
  const [isPropertiesCollapsed, setPropertiesCollapsed] = useState(false);
  const [isPreviewMode, setPreviewMode] = useState(false);

  const handleDrop = (type, position) => {
    dispatch({
      type: 'ADD_ELEMENT',
      payload: { type, position },
    });
  };

  const handleSelectElement = (id) => {
    dispatch({
      type: 'SELECT_ELEMENT',
      payload: { id },
    });
  };

  const handlePropertyChange = (props) => {
    if (state.selectedElementId) {
      dispatch({
        type: 'UPDATE_ELEMENT_PROPS',
        payload: {
          id: state.selectedElementId,
          props,
        },
      });
    }
  };

  const handleDeleteElement = () => {
    if (state.selectedElementId) {
      dispatch({
        type: 'DELETE_ELEMENT',
        payload: {
          id: state.selectedElementId,
        },
      });
    }
  };

  const handleCanvasClick = () => {
    // Deselect when clicking on canvas background
    if (state.selectedElementId) {
      dispatch({
        type: 'SELECT_ELEMENT',
        payload: { id: null },
      });
    }
  };

  const togglePreviewMode = () => {
    setPreviewMode(!isPreviewMode);
  };

  const selectedElement = state.selectedElementId
    ? state.canvas.elements[state.selectedElementId]
    : null;

  const canvasWidth = 
    activeDevice === 'mobile' ? '320px' :
    activeDevice === 'tablet' ? '768px' : '100%';

  return (
    <div className="flex flex-col h-screen font-sans m-0 p-0 text-gray-800 bg-gray-50">
      {/* Header - Modernized with gradient and better spacing */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-3 flex justify-between items-center shadow-md">
        <h1 className="m-0 text-2xl font-bold text-white flex items-center">
          <span className="mr-2">🌐</span> Websites.co.in Builder
        </h1>
        <div className="flex gap-3 items-center">
          {/* Preview Button */}
          <button 
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium transition-all duration-200
              ${isPreviewMode 
                ? 'bg-white text-blue-700 hover:bg-gray-100' 
                : 'bg-blue-500 text-white hover:bg-blue-400 border border-blue-400'}`}
            onClick={togglePreviewMode}
          >
            <Eye size={16} />
            {isPreviewMode ? 'Edit Mode' : 'Preview'}
          </button>
          
          {/* Device Toggle - Improved with icons */}
          <div className="flex bg-blue-800 bg-opacity-30 rounded-md p-1">
            <button 
              className={`p-1.5 rounded-md transition-all ${activeDevice === 'desktop' 
                ? 'bg-white text-blue-700' 
                : 'text-blue-100 hover:bg-blue-700'}`}
              onClick={() => setActiveDevice('desktop')}
              title="Desktop View"
            >
              <Laptop size={16} />
            </button>
            <button 
              className={`p-1.5 rounded-md transition-all ${activeDevice === 'tablet' 
                ? 'bg-white text-blue-700' 
                : 'text-blue-100 hover:bg-blue-700'}`}
              onClick={() => setActiveDevice('tablet')}
              title="Tablet View"
            >
              <Tablet size={16} />
            </button>
            <button 
              className={`p-1.5 rounded-md transition-all ${activeDevice === 'mobile' 
                ? 'bg-white text-blue-700' 
                : 'text-blue-100 hover:bg-blue-700'}`}
              onClick={() => setActiveDevice('mobile')}
              title="Mobile View"
            >
              <Smartphone size={16} />
            </button>
          </div>
          
          {/* Delete Button - Only show when an element is selected */}
          {state.selectedElementId && (
            <button 
              className="flex items-center gap-1 bg-red-600 hover:bg-red-500 text-white rounded-md px-3 py-1.5 font-medium transition-all"
              onClick={handleDeleteElement}
              title="Delete Selected Element"
            >
              <Trash2 size={16} />
              Delete
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Element Palette - Now collapsible */}
        <div className={`bg-white border-r border-gray-200 overflow-hidden transition-all duration-300 flex flex-col
          ${isPaletteCollapsed ? 'w-10' : 'w-64'}`}
        >
          <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-gray-50">
            {!isPaletteCollapsed && <h3 className="m-0 font-semibold">Elements</h3>}
            <button 
              className="p-1 rounded-md hover:bg-gray-200 transition-all ml-auto"
              onClick={() => setPaletteCollapsed(!isPaletteCollapsed)}
              title={isPaletteCollapsed ? "Expand Palette" : "Collapse Palette"}
            >
              {isPaletteCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
          </div>
          <div className={`flex-1 overflow-y-auto ${isPaletteCollapsed ? 'hidden' : 'block'}`}>
            <ElementPalette />
          </div>
        </div>

        {/* Canvas Area - Enhanced with better styling */}
        <div className="flex-1 bg-gray-100 overflow-auto flex justify-center p-4">
          <div 
            className="bg-white shadow-lg transition-all duration-300 ease-in-out h-full"
            style={{ 
              width: canvasWidth,
              maxWidth: '100%',
            }}
          >
            <CanvasDropArea onDrop={handleDrop} onClick={handleCanvasClick} isPreviewMode={isPreviewMode}>
              {state.canvas.layout.map((elementId) => {
                const element = state.canvas.elements[elementId];
                return (
                  <CanvasElement
                    key={elementId}
                    element={element}
                    isSelected={state.selectedElementId === elementId}
                    onSelect={handleSelectElement}
                    onPropertyChange={(props) => handlePropertyChange(props)}
                    isPreviewMode={isPreviewMode}
                  />
                );
              })}
              {state.canvas.layout.length === 0 && !isPreviewMode && (
                <div className="flex flex-col items-center justify-center text-gray-500 py-16">
                  <svg className="w-16 h-16 mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="text-lg">Drag elements from the palette to start building</p>
                  <p className="text-sm mt-2">Click on elements to edit their properties</p>
                </div>
              )}
            </CanvasDropArea>
          </div>
        </div>

        {/* Property Editor - Now collapsible */}
        <div className={`bg-white border-l border-gray-200 overflow-hidden transition-all duration-300 flex flex-col
          ${isPropertiesCollapsed ? 'w-10' : 'w-80'}`}
        >
          <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-gray-50">
            {!isPropertiesCollapsed && <h3 className="m-0 font-semibold">Properties</h3>}
            <button 
              className="p-1 rounded-md hover:bg-gray-200 transition-all ml-auto"
              onClick={() => setPropertiesCollapsed(!isPropertiesCollapsed)}
              title={isPropertiesCollapsed ? "Expand Properties" : "Collapse Properties"}
            >
              {isPropertiesCollapsed ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>
          <div className={`flex-1 overflow-y-auto ${isPropertiesCollapsed ? 'hidden' : 'block'}`}>
            <PropertyEditor
              element={selectedElement}
              onPropertyChange={handlePropertyChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteBuilder;