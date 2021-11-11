import './App.css';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { WidgetBuilder } from './Components/WidgetBuilder/Widget.builder';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new-widget" element={<WidgetBuilder />} />
          <Route path="/edit/:id" element={<WidgetBuilder />} />
        </Routes>
      </div>
    </DndProvider>
  );
}

export default App;

//TO DO: once server is done retrieve data from it and update router /edit/:id to pass props to it correctly
