import React from 'react';
import ELEMENT_TYPES from '../../constants/elementTypes';

// Canvas element renderer
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
            style={{ 
              color: props.color,
              textAlign: props.align,
            }}
          >
            {props.text}
          </HeadingTag>
        );
      case ELEMENT_TYPES.PARAGRAPH:
        return (
          <p
            style={{
              color: props.color,
              fontSize: props.fontSize,
              textAlign: props.align,
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
            style={{
              backgroundColor: props.backgroundColor,
              color: props.color,
              padding: props.size === 'small' ? '6px 12px' : props.size === 'large' ? '12px 24px' : '8px 16px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
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
            <p style={{ margin: 0 }}>Container Element</p>
          </div>
        );
      default:
        return <div>Unknown Element Type</div>;
    }
  };

  return (
    <div
      className={`canvas-element ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      style={{
        position: 'relative',
        cursor: 'pointer',
        padding: '5px',
        border: isSelected ? '2px solid #007bff' : '2px solid transparent',
        margin: '5px',
        transition: 'all 0.2s ease',
      }}
    >
      {renderElement()}
    </div>
  );
}

export default CanvasElement;