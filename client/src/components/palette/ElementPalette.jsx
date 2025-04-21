import React from 'react';
import DraggableElementType from './DraggableElementType';
import ELEMENT_TYPES from '../../constants/elementTypes';

// Enhanced element palette component with better organization and styling
function ElementPalette({ isMobileView }) {
  // Icons can be custom or emoji based on preference
  const elementGroups = [
    {
      title: "Content",
      elements: [
        { type: ELEMENT_TYPES.HEADING, name: "Heading", icon: "H" },
        { type: ELEMENT_TYPES.PARAGRAPH, name: "Paragraph", icon: "¶" },
      ]
    },
    {
      title: "Media",
      elements: [
        { type: ELEMENT_TYPES.IMAGE, name: "Image", icon: "🖼️" },
        { type: ELEMENT_TYPES.BUTTON, name: "Button", icon: "B" },
      ]
    },
    {
      title: "Layout",
      elements: [
        { type: ELEMENT_TYPES.CONTAINER, name: "Container", icon: "□" },
      ]
    }
  ];

  return (
    <div className="p-2 sm:p-3">
      {elementGroups.map((group, index) => (
        <div key={index} className="mb-4 sm:mb-6">
          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 sm:mb-3 px-1">
            {group.title}
          </h4>
          <div className={`grid ${isMobileView ? 'grid-cols-3' : 'grid-cols-2'} gap-2 sm:gap-3`}>
            {group.elements.map((element, elemIndex) => (
              <DraggableElementType
                key={elemIndex}
                type={element.type}
                name={element.name}
                icon={element.icon}
                isMobileView={isMobileView}
              />
            ))}
          </div>
        </div>
      ))}
      
      {/* Helpful Instructions - Hide on mobile to save space */}
      {!isMobileView && (
        <div className="mt-8 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <h5 className="text-sm font-semibold text-blue-700 mb-2">Quick Tips</h5>
          <ul className="text-xs text-blue-700 list-disc pl-4 space-y-1">
            <li>Drag elements to add them to your page</li>
            <li>Click on any element to edit its properties</li>
            <li>Use the preview mode to see your final design</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ElementPalette;