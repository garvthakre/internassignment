import React from 'react';
import DraggableElementType from './DraggableElementType';
import ELEMENT_TYPES from '../../constants/elementTypes';

// Element palette component
function ElementPalette() {
  return (
    <div>
      <h3 style={{ marginTop: 0, paddingBottom: '10px', borderBottom: '1px solid #dee2e6' }}>Elements</h3>
      <div>
        <div>
          <h4 style={{ margin: '15px 0 10px', color: '#6c757d' }}>Basic</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <DraggableElementType 
              type={ELEMENT_TYPES.HEADING} 
              name="Heading" 
              icon="H" 
            />
            <DraggableElementType 
              type={ELEMENT_TYPES.PARAGRAPH} 
              name="Paragraph" 
              icon="¶" 
            />
            <DraggableElementType 
              type={ELEMENT_TYPES.IMAGE} 
              name="Image" 
              icon="🖼️" 
            />
            <DraggableElementType 
              type={ELEMENT_TYPES.BUTTON} 
              name="Button" 
              icon="B" 
            />
          </div>
        </div>
        <div>
          <h4 style={{ margin: '15px 0 10px', color: '#6c757d' }}>Layout</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <DraggableElementType 
              type={ELEMENT_TYPES.CONTAINER} 
              name="Container" 
              icon="□" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElementPalette;