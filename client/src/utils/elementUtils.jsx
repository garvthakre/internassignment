import ELEMENT_TYPES from '../constants/elementTypes';

 
export function getDefaultProps(type) {
  switch (type) {
    case ELEMENT_TYPES.HEADING:
      return {
        text: 'Heading Text',
        size: 'h1',
        color: '#333333',
        align: 'left',
      };
    case ELEMENT_TYPES.PARAGRAPH:
      return {
        text: 'This is a paragraph of text. Click to edit the content.',
        color: '#666666',
        fontSize: '16px',
        align: 'left',
      };
    case ELEMENT_TYPES.IMAGE:
      return {
        src: '/api/placeholder/300/200',
        alt: 'Image Description',
        width: '100%',
      };
    case ELEMENT_TYPES.BUTTON:
      return {
        text: 'Click Me',
        backgroundColor: '#007bff',
        color: '#ffffff',
        size: 'medium',
        link: '#',
      };
    case ELEMENT_TYPES.CONTAINER:
      return {
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '4px',
        children: [],
      };
    default:
      return {};
  }
}