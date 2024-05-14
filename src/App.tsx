import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Settings from './components/pages/Settings/Settings';
import Tasks from './components/pages/Tasks/Tasks';
import ExtraPiece from './components/pages/Tasks/TaskList/ExtraPiece/ExtraPiece';
import LargerNumber from './components/pages/Tasks/TaskList/LargerNumber/LargerNumber';
import SidePanelNavigation from './components/navigation/sidePanelNavigation/SidePanelNavigation';
import './components/MainStyle.css'

function App() {
  return (
    <div className="App">
      <SidePanelNavigation/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Settings' element={<Settings/>}/>
          <Route path='/Tasks' element={<Tasks/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
          <Route path='/LargerNumber' element={<LargerNumber/>}/>
          <Route path='/ExtraPiece' element={<ExtraPiece/>}/>
        </Routes>
    </div>
  );
}

export default App;
