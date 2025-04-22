import React, { useState, useReducer, useEffect } from 'react';
import { X, Eye, Laptop, Tablet, Smartphone, ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
import ElementPalette from './palette/ElementPalette';
import CanvasDropArea from './canvas/CanvasDropArea';
import CanvasElement from './canvas/CanvasElement';
import PropertyEditor from "./property/PropertyEditor";
import { builderReducer, initialState } from '../reducers/builderReducer';

 
function WebsiteBuilder() {
  const [state, dispatch] = useReducer(builderReducer, initialState);
  const [activeDevice, setActiveDevice] = useState('desktop');
  const [isPaletteCollapsed, setPaletteCollapsed] = useState(false);
  const [isPropertiesCollapsed, setPropertiesCollapsed] = useState(false);
  const [isPreviewMode, setPreviewMode] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      
      
      if (window.innerWidth < 768) {
        setPaletteCollapsed(true);
        setPropertiesCollapsed(true);
      }
    };

     
    handleResize();
    
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    
     
    if (isMobileView) {
      setPropertiesCollapsed(false);
      setPaletteCollapsed(true);
    }
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
     
    if (state.selectedElementId) {
      dispatch({
        type: 'SELECT_ELEMENT',
        payload: { id: null },
      });
    }
  };

  const togglePreviewMode = () => {
    setPreviewMode(!isPreviewMode);
    
    // Collapse both panels in preview mode on mobile
    if (isMobileView && !isPreviewMode) {
      setPaletteCollapsed(true);
      setPropertiesCollapsed(true);
    }
  };

  const selectedElement = state.selectedElementId
    ? state.canvas.elements[state.selectedElementId]
    : null;

  const canvasWidth = 
    activeDevice === 'mobile' ? '320px' :
    activeDevice === 'tablet' ? '768px' : '100%';

  return (
    <div className="flex flex-col h-screen font-sans m-0 p-0 text-gray-800 bg-gray-50">
       
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-3 sm:px-5 py-3 flex justify-between items-center shadow-md">
        <h1 className="m-0 text-lg sm:text-2xl font-bold text-white flex items-center truncate">
          <span className="mr-2">🌐</span> 
          <span className="hidden sm:inline">Websites.co.in</span> Builder
        </h1>
        <div className="flex gap-1 sm:gap-3 items-center">
         
          <button 
            className={`flex items-center gap-0.5 sm:gap-1.5 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 text-sm sm:text-base font-medium transition-all duration-200
              ${isPreviewMode 
                ? 'bg-white text-blue-700 hover:bg-gray-100' 
                : 'bg-blue-500 text-white hover:bg-blue-400 border border-blue-400'}`}
            onClick={togglePreviewMode}
          >
            <Eye size={isMobileView ? 14 : 16} />
            {isPreviewMode ? (isMobileView ? 'Edit' : 'Edit Mode') : 'Preview'}
          </button>
          
          
          <div className="flex bg-blue-800 bg-opacity-30 rounded-md p-1">
            <button 
              className={`p-1 sm:p-1.5 rounded-md transition-all ${activeDevice === 'desktop' 
                ? 'bg-white text-blue-700' 
                : 'text-blue-100 hover:bg-blue-700'}`}
              onClick={() => setActiveDevice('desktop')}
              title="Desktop View"
            >
              <Laptop size={isMobileView ? 14 : 16} />
            </button>
            <button 
              className={`p-1 sm:p-1.5 rounded-md transition-all ${activeDevice === 'tablet' 
                ? 'bg-white text-blue-700' 
                : 'text-blue-100 hover:bg-blue-700'}`}
              onClick={() => setActiveDevice('tablet')}
              title="Tablet View"
            >
              <Tablet size={isMobileView ? 14 : 16} />
            </button>
            <button 
              className={`p-1 sm:p-1.5 rounded-md transition-all ${activeDevice === 'mobile' 
                ? 'bg-white text-blue-700' 
                : 'text-blue-100 hover:bg-blue-700'}`}
              onClick={() => setActiveDevice('mobile')}
              title="Mobile View"
            >
              <Smartphone size={isMobileView ? 14 : 16} />
            </button>
          </div>
          
           
          {state.selectedElementId && (
            <button 
              className="flex items-center gap-0.5 sm:gap-1 bg-red-600 hover:bg-red-500 text-white rounded-md px-2 sm:px-3 py-1 sm:py-1.5 text-sm sm:text-base font-medium transition-all"
              onClick={handleDeleteElement}
              title="Delete Selected Element"
            >
              <Trash2 size={isMobileView ? 14 : 16} />
              {!isMobileView && "Delete"}
            </button>
          )}
        </div>
      </div>

      
      <div className={`flex ${isMobileView ? 'flex-col' : 'flex-row'} flex-1 overflow-hidden relative`}>
        {/* Element Palette */}
        <div className={`bg-white border-r border-gray-200 overflow-hidden transition-all duration-300 flex flex-col
          ${isPaletteCollapsed 
            ? (isMobileView ? 'h-10 min-h-10' : 'w-10 min-w-10') 
            : (isMobileView ? 'h-64' : 'w-64')}`}
          style={isMobileView ? {order: 1} : {}}
        >
          <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-gray-50">
            {!isPaletteCollapsed && <h3 className="m-0 font-semibold">Elements</h3>}
            <button 
              className="p-1 rounded-md hover:bg-gray-200 transition-all ml-auto"
              onClick={() => {
                setPaletteCollapsed(!isPaletteCollapsed);
                if (isMobileView && !isPaletteCollapsed) {
                  setPropertiesCollapsed(true);
                }
              }}
              title={isPaletteCollapsed ? "Expand Palette" : "Collapse Palette"}
            >
              {isMobileView ? 
                (isPaletteCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />) :
                (isPaletteCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />)
              }
            </button>
          </div>
          <div className={`flex-1 overflow-y-auto ${isPaletteCollapsed ? 'hidden' : 'block'}`}>
            <ElementPalette isMobileView={isMobileView} />
          </div>
        </div>

        {/* Canvas Area - Enhanced with better styling */}
        <div className="flex-1 bg-gray-100 overflow-auto flex justify-center p-2 sm:p-4" style={isMobileView ? {order: 3} : {}}>
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
                <div className="flex flex-col items-center justify-center text-gray-500 py-8 sm:py-16">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="text-base sm:text-lg text-center px-2">Drag elements from the palette to start building</p>
                  <p className="text-xs sm:text-sm mt-2 text-center px-2">Click on elements to edit their properties</p>
                </div>
              )}
            </CanvasDropArea>
          </div>
        </div>

        {/* Property Editor - Now collapsible */}
        <div className={`bg-white border-l border-gray-200 overflow-hidden transition-all duration-300 flex flex-col
          ${isPropertiesCollapsed 
            ? (isMobileView ? 'h-10 min-h-10' : 'w-10 min-w-10') 
            : (isMobileView ? 'h-64' : 'w-80')}`}
          style={isMobileView ? {order: 2} : {}}
        >
          <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-gray-50">
            {!isPropertiesCollapsed && <h3 className="m-0 font-semibold">Properties</h3>}
            <button 
              className="p-1 rounded-md hover:bg-gray-200 transition-all ml-auto"
              onClick={() => {
                setPropertiesCollapsed(!isPropertiesCollapsed);
                if (isMobileView && !isPropertiesCollapsed) {
                  setPaletteCollapsed(true);
                }
              }}
              title={isPropertiesCollapsed ? "Expand Properties" : "Collapse Properties"}
            >
              {isMobileView ? 
                (isPropertiesCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />) :
                (isPropertiesCollapsed ? <ChevronLeft size={18} /> : <ChevronRight size={18} />)
              }
            </button>
          </div>
          <div className={`flex-1 overflow-y-auto ${isPropertiesCollapsed ? 'hidden' : 'block'}`}>
            <PropertyEditor
              element={selectedElement}
              onPropertyChange={handlePropertyChange}
              isMobileView={isMobileView}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Add ChevronUp and ChevronDown for mobile view
const ChevronUp = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const ChevronDown = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default WebsiteBuilder;