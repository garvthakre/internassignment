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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      margin: 0,
      padding: 0,
      color: '#333',
    }}>
      {/* Header */}
      <div style={{
        background: '#f8f9fa',
        borderBottom: '1px solid #dee2e6',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Websites.co.in Website Builder</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <ResponsivePreviewToggle 
            activeDevice={activeDevice} 
            onDeviceChange={setActiveDevice} 
          />
          {state.selectedElementId && (
            <button 
              style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
              onClick={handleDeleteElement}
            >
              Delete Element
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
      }}>
        {/* Element Palette */}
        <div style={{
          width: '250px',
          borderRight: '1px solid #dee2e6',
          overflowY: 'auto',
          padding: '10px',
        }}>
          <ElementPalette />
        </div>

        {/* Canvas Area */}
        <div style={{
          flex: 1,
          padding: '20px',
          overflowY: 'auto',
          transition: 'max-width 0.3s ease',
          maxWidth: canvasWidth,
          margin: '0 auto',
        }}>
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
              <div style={{
                textAlign: 'center',
                color: '#6c757d',
                padding: '40px 0',
              }}>
                Drag elements from the palette to start building your website
              </div>
            )}
          </CanvasDropArea>
        </div>

        {/* Property Editor */}
        <div style={{
          width: '300px',
          borderLeft: '1px solid #dee2e6',
          overflowY: 'auto',
          padding: '10px',
        }}>
          <PropertyEditor
            element={selectedElement}
            onPropertyChange={handlePropertyChange}
          />
        </div>
      </div>
    </div>
  );
}

export default WebsiteBuilder