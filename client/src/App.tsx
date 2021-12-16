import './App.css';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { WidgetBuilder } from './Components/WidgetBuilder/Widget.builder';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { WidgetsContext } from './Utils/Contexts';
import { useState, useEffect } from 'react';
import { getAllWidgets } from './Utils/ApiService';
import { Calculator } from './Types/Widget';

function App() {
  const [widgets, setWidgets] = useState<Calculator[]>([]);
  // useEffect(() => {
  //   getAllWidgets().then((res) => {
  //     setWidgets([...res]);
  //   });
  // }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <WidgetsContext.Provider value={{ widgets, setWidgets }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/new-widget" element={<WidgetBuilder />} />
            <Route path="/edit/:id" element={<WidgetBuilder />} />
          </Routes>
        </div>
      </WidgetsContext.Provider>
    </DndProvider>
  );
}

export default App;

//TO DO: once server is done retrieve data from it and update router /edit/:id to pass props to it correctly
