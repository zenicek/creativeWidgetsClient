import './App.css';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { WidgetBuilder } from './Components/WidgetBuilder/Widget.builder';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndContext } from '@dnd-kit/core';

function App() {
  //TODO: Use middleware to update the widget

  return (
    <DndContext onDragEnd={e => console.log(e)}>
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
