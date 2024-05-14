import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Settings from './components/pages/Settings/Settings';
import Tasks from './components/pages/Tasks/Tasks';
import SidePanelNavigation from './components/Navigation/SidePanelNavigation';

function App() {
  return (
    <div className="App">
      <SidePanelNavigation/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
        </Routes>
    </div>
  );
}

export default App;
