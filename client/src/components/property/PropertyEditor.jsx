import React from 'react';
import ELEMENT_TYPES from '../../constants/elementTypes';

// Property editor for selected element
export function PropertyEditor({ element, onPropertyChange, isMobileView }) {
  if (!element) {
    return (
      <div className="flex items-center justify-center text-gray-500 h-full p-4 text-center">
        <span className="text-sm sm:text-base">No element selected</span>
      </div>
    );
  }

  const renderPropertyFields = () => {
    const { type, props } = element;

    // Common CSS classes for form elements
    const labelClass = "block mb-1 font-medium text-sm";
    const inputClass = "w-full p-1.5 sm:p-2 border border-gray-300 rounded text-sm";
    const fieldGroupClass = "mb-3 sm:mb-4";

    switch (type) {
      case ELEMENT_TYPES.HEADING:
        return (
          <>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Text</label>
              <input
                type="text"
                value={props.text}
                onChange={(e) => onPropertyChange({ text: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Size</label>
              <select
                value={props.size}
                onChange={(e) => onPropertyChange({ size: e.target.value })}
                className={inputClass}
              >
                <option value="h1">H1</option>
                <option value="h2">H2</option>
                <option value="h3">H3</option>
                <option value="h4">H4</option>
                <option value="h5">H5</option>
                <option value="h6">H6</option>
              </select>
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Color</label>
              <input
                type="color"
                value={props.color}
                onChange={(e) => onPropertyChange({ color: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Alignment</label>
              <select
                value={props.align}
                onChange={(e) => onPropertyChange({ align: e.target.value })}
                className={inputClass}
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
            <div className={fieldGroupClass}>
              <label className={labelClass}>Text</label>
              <textarea
                value={props.text}
                onChange={(e) => onPropertyChange({ text: e.target.value })}
                rows={isMobileView ? 3 : 4}
                className={`${inputClass} resize-y min-h-[80px] sm:min-h-[100px]`}
              />
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Color</label>
              <input
                type="color"
                value={props.color}
                onChange={(e) => onPropertyChange({ color: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Font Size</label>
              <input
                type="text"
                value={props.fontSize}
                onChange={(e) => onPropertyChange({ fontSize: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Alignment</label>
              <select
                value={props.align}
                onChange={(e) => onPropertyChange({ align: e.target.value })}
                className={inputClass}
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
            <div className={fieldGroupClass}>
              <label className={labelClass}>Image URL</label>
              <input
                type="text"
                value={props.src}
                onChange={(e) => onPropertyChange({ src: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Alt Text</label>
              <input
                type="text"
                value={props.alt}
                onChange={(e) => onPropertyChange({ alt: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Width</label>
              <input
                type="text"
                value={props.width}
                onChange={(e) => onPropertyChange({ width: e.target.value })}
                className={inputClass}
              />
            </div>
          </>
        );
      case ELEMENT_TYPES.BUTTON:
        return (
          <>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Button Text</label>
              <input
                type="text"
                value={props.text}
                onChange={(e) => onPropertyChange({ text: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Background Color</label>
              <input
                type="color"
                value={props.backgroundColor}
                onChange={(e) => onPropertyChange({ backgroundColor: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Text Color</label>
              <input
                type="color"
                value={props.color}
                onChange={(e) => onPropertyChange({ color: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Size</label>
              <select
                value={props.size}
                onChange={(e) => onPropertyChange({ size: e.target.value })}
                className={inputClass}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Link</label>
              <input
                type="text"
                value={props.link}
                onChange={(e) => onPropertyChange({ link: e.target.value })}
                className={inputClass}
              />
            </div>
          </>
        );
      case ELEMENT_TYPES.CONTAINER:
        return (
          <>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Background Color</label>
              <input
                type="color"
                value={props.backgroundColor}
                onChange={(e) => onPropertyChange({ backgroundColor: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Padding</label>
              <input
                type="text"
                value={props.padding}
                onChange={(e) => onPropertyChange({ padding: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className={fieldGroupClass}>
              <label className={labelClass}>Border Radius</label>
              <input
                type="text"
                value={props.borderRadius}
                onChange={(e) => onPropertyChange({ borderRadius: e.target.value })}
                className={inputClass}
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
      <h3 className="mt-0 py-2 px-3 border-b border-gray-300 text-sm sm:text-base">Element Properties</h3>
      <div className="font-bold mb-2 sm:mb-4 p-2 sm:p-2.5 bg-gray-100 rounded mx-2 mt-2 text-sm">
        {element.type.charAt(0).toUpperCase() + element.type.slice(1)}
      </div>
      <div className="flex-1 overflow-y-auto px-2 sm:px-3">
        {renderPropertyFields()}
      </div>
    </div>
  );
}

export default PropertyEditor;