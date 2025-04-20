import React from 'react';
import ELEMENT_TYPES from '../../constants/elementTypes';

// Property editor for selected element
export function PropertyEditor({ element, onPropertyChange }) {
  if (!element) {
    return (
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6c757d',
          height: '100%',
        }}
      >
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
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Text</label>
              <input
                type="text"
                value={props.text}
                onChange={(e) => onPropertyChange({ text: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Size</label>
              <select
                value={props.size}
                onChange={(e) => onPropertyChange({ size: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              >
                <option value="h1">H1</option>
                <option value="h2">H2</option>
                <option value="h3">H3</option>
                <option value="h4">H4</option>
                <option value="h5">H5</option>
                <option value="h6">H6</option>
              </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Color</label>
              <input
                type="color"
                value={props.color}
                onChange={(e) => onPropertyChange({ color: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Alignment</label>
              <select
                value={props.align}
                onChange={(e) => onPropertyChange({ align: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
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
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Text</label>
              <textarea
                value={props.text}
                onChange={(e) => onPropertyChange({ text: e.target.value })}
                rows={4}
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  border: '1px solid #ced4da', 
                  borderRadius: '4px',
                  resize: 'vertical',
                  minHeight: '100px'
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Color</label>
              <input
                type="color"
                value={props.color}
                onChange={(e) => onPropertyChange({ color: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Font Size</label>
              <input
                type="text"
                value={props.fontSize}
                onChange={(e) => onPropertyChange({ fontSize: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Alignment</label>
              <select
                value={props.align}
                onChange={(e) => onPropertyChange({ align: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
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
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Image URL</label>
              <input
                type="text"
                value={props.src}
                onChange={(e) => onPropertyChange({ src: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Alt Text</label>
              <input
                type="text"
                value={props.alt}
                onChange={(e) => onPropertyChange({ alt: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Width</label>
              <input
                type="text"
                value={props.width}
                onChange={(e) => onPropertyChange({ width: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
          </>
        );
      case ELEMENT_TYPES.BUTTON:
        return (
          <>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Button Text</label>
              <input
                type="text"
                value={props.text}
                onChange={(e) => onPropertyChange({ text: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Background Color</label>
              <input
                type="color"
                value={props.backgroundColor}
                onChange={(e) => onPropertyChange({ backgroundColor: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Text Color</label>
              <input
                type="color"
                value={props.color}
                onChange={(e) => onPropertyChange({ color: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Size</label>
              <select
                value={props.size}
                onChange={(e) => onPropertyChange({ size: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Link</label>
              <input
                type="text"
                value={props.link}
                onChange={(e) => onPropertyChange({ link: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
          </>
        );
      case ELEMENT_TYPES.CONTAINER:
        return (
          <>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Background Color</label>
              <input
                type="color"
                value={props.backgroundColor}
                onChange={(e) => onPropertyChange({ backgroundColor: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Padding</label>
              <input
                type="text"
                value={props.padding}
                onChange={(e) => onPropertyChange({ padding: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>Border Radius</label>
              <input
                type="text"
                value={props.borderRadius}
                onChange={(e) => onPropertyChange({ borderRadius: e.target.value })}
                style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
          </>
        );
      default:
        return <div>No properties available</div>;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h3 style={{ marginTop: 0, paddingBottom: '10px', borderBottom: '1px solid #dee2e6' }}>Element Properties</h3>
      <div style={{ fontWeight: 'bold', marginBottom: '15px', padding: '5px 10px', backgroundColor: '#e9ecef', borderRadius: '4px' }}>
        {element.type.charAt(0).toUpperCase() + element.type.slice(1)}
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {renderPropertyFields()}
      </div>
    </div>
  );
}

export default PropertyEditor;