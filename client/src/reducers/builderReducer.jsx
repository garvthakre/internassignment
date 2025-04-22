import { getDefaultProps } from '../utils/elementUtils';

 
export const initialState = {
  canvas: {
    elements: {},
    layout: [],
    nextId: 1,
  },
  selectedElementId: null,
  history: [],
  historyIndex: -1,
};

// Reducer for state management
export function builderReducer(state, action) {
  switch (action.type) {
    case 'ADD_ELEMENT': {
      const elementId = `element-${state.canvas.nextId}`;
      const newElement = {
        id: elementId,
        type: action.payload.type,
        props: getDefaultProps(action.payload.type),
        position: action.payload.position,
      };

      return {
        ...state,
        canvas: {
          ...state.canvas,
          elements: {
            ...state.canvas.elements,
            [elementId]: newElement,
          },
          layout: [...state.canvas.layout, elementId],
          nextId: state.canvas.nextId + 1,
        },
        selectedElementId: elementId,
      };
    }
    case 'UPDATE_ELEMENT_PROPS': {
      return {
        ...state,
        canvas: {
          ...state.canvas,
          elements: {
            ...state.canvas.elements,
            [action.payload.id]: {
              ...state.canvas.elements[action.payload.id],
              props: {
                ...state.canvas.elements[action.payload.id].props,
                ...action.payload.props,
              },
            },
          },
        },
      };
    }
    case 'MOVE_ELEMENT': {
      return {
        ...state,
        canvas: {
          ...state.canvas,
          elements: {
            ...state.canvas.elements,
            [action.payload.id]: {
              ...state.canvas.elements[action.payload.id],
              position: action.payload.position,
            },
          },
        },
      };
    }
    case 'SELECT_ELEMENT': {
      return {
        ...state,
        selectedElementId: action.payload.id,
      };
    }
    case 'DELETE_ELEMENT': {
      const { [action.payload.id]: _, ...remainingElements } = state.canvas.elements;
      return {
        ...state,
        canvas: {
          ...state.canvas,
          elements: remainingElements,
          layout: state.canvas.layout.filter(id => id !== action.payload.id),
        },
        selectedElementId: state.selectedElementId === action.payload.id ? null : state.selectedElementId,
      };
    }
    default:
      return state;
  }
}