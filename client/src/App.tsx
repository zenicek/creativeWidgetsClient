import './App.css';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { WidgetBuilder } from './Components/WidgetBuilder/Widget.builder';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { elementTypes } from './Components/InputElements/Elements.types';
import { useCalcElementHandler } from './Utils/CustomHooks';
import { InputMetas } from './States';

function App() {
  //TODO: Use middleware to update the widget
  const { addElement, arrangeElements } = useCalcElementHandler();

  const handleDragEnd = (e: DragEndEvent) => {
    if (elementTypes.includes(e.active.id) && e.over?.id === 'droppable-ctn')
      //@ts-ignore => this is hating it because of the dynamic search... discriminated union again
      addElement(InputMetas[e.active.id]);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new-widget" element={<WidgetBuilder />} />
          <Route path="/edit/:id" element={<WidgetBuilder />} />
        </Routes>
      </div>
    </DndContext>
  );
}

export default App;

//TO DO: once server is done retrieve data from it and update router /edit/:id to pass props to it correctly
