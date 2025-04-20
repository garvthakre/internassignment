import React from 'react';
import DraggableElementType from './DraggableElementType';
import ELEMENT_TYPES from '../../constants/elementTypes';

// Element palette component
function ElementPalette() {
  return (
    <div>
      <h3 className="mt-0 pb-2.5 border-b border-gray-300">Elements</h3>
      <div>
        <div>
          <h4 className="my-4 mt-3.5 text-gray-500">Basic</h4>
          <div className="flex flex-wrap gap-2">
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
          <h4 className="my-4 mt-3.5 text-gray-500">Layout</h4>
          <div className="flex flex-wrap gap-2">
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