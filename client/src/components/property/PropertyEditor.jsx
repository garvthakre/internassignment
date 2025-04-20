import React from 'react';
import ELEMENT_TYPES from '../../constants/elementTypes';

// Property editor for selected element
export function PropertyEditor({ element, onPropertyChange }) {
  if (!element) {
    return (
      <div className="flex items-center justify-center text-gray-500 h-full">
        No element selected
      </div>
    );
  }

  const renderPropertyFields = () => {
    const { type, props } = element;

    switch (type) {
      case ELEMENT_TYPES.HEADING:
        return (
          <>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Text</label>
              <input
                type="text"
                value={props.text}
                onChange={(e) => onPropertyChange({ text: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Size</label>
              <select
                value={props.size}
                onChange={(e) => onPropertyChange({ size: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="h1">H1</option>
                <option value="h2">H2</option>
                <option value="h3">H3</option>
                <option value="h4">H4</option>
                <option value="h5">H5</option>
                <option value="h6">H6</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Color</label>
              <input
                type="color"
                value={props.color}
                onChange={(e) => onPropertyChange({ color: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Alignment</label>
              <select
                value={props.align}
                onChange={(e) => onPropertyChange({ align: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
          </>
        );
      case ELEMENT_TYPES.PARAGRAPH:
        return (
          <>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Text</label>
              <textarea
                value={props.text}
                onChange={(e) => onPropertyChange({ text: e.target.value })}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded resize-y min-h-[100px]"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Color</label>
              <input
                type="color"
                value={props.color}
                onChange={(e) => onPropertyChange({ color: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Font Size</label>
              <input
                type="text"
                value={props.fontSize}
                onChange={(e) => onPropertyChange({ fontSize: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Alignment</label>
              <select
                value={props.align}
                onChange={(e) => onPropertyChange({ align: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
                <option value="justify">Justify</option>
              </select>
            </div>
          </>
        );
      case ELEMENT_TYPES.IMAGE:
        return (
          <>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Image URL</label>
              <input
                type="text"
                value={props.src}
                onChange={(e) => onPropertyChange({ src: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Alt Text</label>
              <input
                type="text"
                value={props.alt}
                onChange={(e) => onPropertyChange({ alt: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Width</label>
              <input
                type="text"
                value={props.width}
                onChange={(e) => onPropertyChange({ width: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </>
        );
      case ELEMENT_TYPES.BUTTON:
        return (
          <>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Button Text</label>
              <input
                type="text"
                value={props.text}
                onChange={(e) => onPropertyChange({ text: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Background Color</label>
              <input
                type="color"
                value={props.backgroundColor}
                onChange={(e) => onPropertyChange({ backgroundColor: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Text Color</label>
              <input
                type="color"
                value={props.color}
                onChange={(e) => onPropertyChange({ color: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Size</label>
              <select
                value={props.size}
                onChange={(e) => onPropertyChange({ size: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Link</label>
              <input
                type="text"
                value={props.link}
                onChange={(e) => onPropertyChange({ link: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </>
        );
      case ELEMENT_TYPES.CONTAINER:
        return (
          <>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Background Color</label>
              <input
                type="color"
                value={props.backgroundColor}
                onChange={(e) => onPropertyChange({ backgroundColor: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Padding</label>
              <input
                type="text"
                value={props.padding}
                onChange={(e) => onPropertyChange({ padding: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Border Radius</label>
              <input
                type="text"
                value={props.borderRadius}
                onChange={(e) => onPropertyChange({ borderRadius: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </>
        );
      default:
        return <div>No properties available</div>;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h3 className="mt-0 pb-2.5 border-b border-gray-300">Element Properties</h3>
      <div className="font-bold mb-4 p-2.5 bg-gray-100 rounded">
        {element.type.charAt(0).toUpperCase() + element.type.slice(1)}
      </div>
      <div className="flex-1 overflow-y-auto">
        {renderPropertyFields()}
      </div>
    </div>
  );
}

export default PropertyEditor;