Getting Started
Prerequisites

Node.js (v14.0.0 or higher)
npm or yarn

Installation

Clone the repository:
git clone https://github.com/yourusername/website-builder.git
cd website-builder

Install dependencies:
npm install

Start the development server:
npm run dev

Open your browser and navigate to http://localhost:5173


Project Structure
client/src/
├── components/
│   ├── WebsiteBuilder.jsx        # Main component that combines all elements
│   ├── canvas/
│   │   ├── CanvasDropArea.jsx    # Drop target for elements
│   │   ├── CanvasElement.jsx     # Renderer for elements on canvas
│   │   └── ResponsivePreviewToggle.jsx # Device preview toggle
│   ├── palette/
│   │   ├── DraggableElementType.jsx # Draggable element source
│   │   └── ElementPalette.jsx    # Collection of available elements
│   └── property/
│       └── PropertyEditor.jsx    # Editor for element properties
├── constants/
│   └── elementTypes.js           # Element type definitions
└── reducers/
    └── builderReducer.js         # State management for the builder