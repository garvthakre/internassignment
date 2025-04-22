import React from 'react';
import ELEMENT_TYPES from '../../constants/elementTypes';

 
function CanvasElement({ element, isSelected, onSelect }) {
  const { id, type, props } = element;

  const handleClick = (e) => {
    e.stopPropagation();
    onSelect(id);
  };

  const renderElement = () => {
    switch (type) {
      case ELEMENT_TYPES.HEADING:
        const HeadingTag = props.size;
        return (
          <HeadingTag 
            className={`${props.align === 'left' ? 'text-left' : props.align === 'center' ? 'text-center' : 'text-right'}`}
            style={{ color: props.color }}
          >
            {props.text}
          </HeadingTag>
        );
      case ELEMENT_TYPES.PARAGRAPH:
        return (
          <p
            className={`
              ${props.align === 'left' ? 'text-left' : 
                props.align === 'center' ? 'text-center' : 
                props.align === 'justify' ? 'text-justify' : 'text-right'}
            `}
            style={{ 
              color: props.color,
              fontSize: props.fontSize
            }}
          >
            {props.text}
          </p>
        );
      case ELEMENT_TYPES.IMAGE:
        return (
          <img
            src={props.src}
            alt={props.alt}
            style={{ width: props.width }}
          />
        );
      case ELEMENT_TYPES.BUTTON:
        return (
          <button
            className={`rounded border-none cursor-pointer
              ${props.size === 'small' ? 'px-3 py-1.5' : 
                props.size === 'large' ? 'px-6 py-3' : 'px-4 py-2'}`}
            style={{
              backgroundColor: props.backgroundColor,
              color: props.color
            }}
          >
            {props.text}
          </button>
        );
      case ELEMENT_TYPES.CONTAINER:
        return (
          <div
            style={{
              backgroundColor: props.backgroundColor,
              padding: props.padding,
              borderRadius: props.borderRadius,
            }}
          >
            {/* Container contents would go here */}
            <p className="m-0">Container Element</p>
          </div>
        );
      default:
        return <div>Unknown Element Type</div>;
    }
  };

  return (
    <div
      className={`relative cursor-pointer p-1.5 m-1.5 transition-all duration-200 
        ${isSelected ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
      onClick={handleClick}
    >
      {renderElement()}
    </div>
  );
}

export default CanvasElement;