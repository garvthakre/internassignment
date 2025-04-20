import React, { useState, useReducer } from 'react';
import ElementPalette from './palette/ElementPalette';
import CanvasDropArea from './canvas/CanvasDropArea';
import CanvasElement from './canvas/CanvasElement';
import PropertyEditor from "./property/PropertyEditor";
import ResponsivePreviewToggle from './canvas/ResponsivePreviewToggle';
import { builderReducer, initialState } from '../reducers/builderReducer';

// Main website builder component
function WebsiteBuilder() {
  const [state, dispatch] = useReducer(builderReducer, initialState);
  const [activeDevice, setActiveDevice] = useState('desktop');

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

  const selectedElement = state.selectedElementId
    ? state.canvas.elements[state.selectedElementId]
    : null;

  const canvasWidth = 
    activeDevice === 'mobile' ? '320px' :
    activeDevice === 'tablet' ? '768px' : '100%';

  return (
    <div className="flex flex-col h-screen font-sans m-0 p-0 text-gray-700">
      {/* Header */}
      <div className="bg-gray-100 border-b border-gray-300 px-5 py-2.5 flex justify-between items-center">
        <h1 className="m-0 text-2xl">Websites.co.in Website Builder</h1>
        <div className="flex gap-2.5">
          <ResponsivePreviewToggle 
            activeDevice={activeDevice} 
            onDeviceChange={setActiveDevice} 
          />
          {state.selectedElementId && (
            <button 
              className="bg-red-600 text-white border-none rounded px-2.5 py-1.5 cursor-pointer"
              onClick={handleDeleteElement}
            >
              Delete Element
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Element Palette */}
        <div className="w-64 border-r border-gray-300 overflow-y-auto p-2.5">
          <ElementPalette />
        </div>

        {/* Canvas Area */}
        <div 
          className="flex-1 p-5 overflow-y-auto mx-auto transition-all duration-300 ease-in-out"
          style={{ maxWidth: canvasWidth }}
        >
          <CanvasDropArea onDrop={handleDrop} onClick={handleCanvasClick}>
            {state.canvas.layout.map((elementId) => {
              const element = state.canvas.elements[elementId];
              return (
                <CanvasElement
                  key={elementId}
                  element={element}
                  isSelected={state.selectedElementId === elementId}
                  onSelect={handleSelectElement}
                  onPropertyChange={(props) => handlePropertyChange(props)}
                />
              );
            })}
            {state.canvas.layout.length === 0 && (
              <div className="text-center text-gray-500 py-10">
                Drag elements from the palette to start building your website
              </div>
            )}
          </CanvasDropArea>
        </div>

        {/* Property Editor */}
        <div className="w-80 border-l border-gray-300 overflow-y-auto p-2.5">
          <PropertyEditor
            element={selectedElement}
            onPropertyChange={handlePropertyChange}
          />
        </div>
      </div>
    </div>
  );
}

export default WebsiteBuilder;