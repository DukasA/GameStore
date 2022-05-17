import React, {} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Sidebar from './components/Sidebar';



function App() {

  return (
    <div className='app'>
      <Router>
        <Header/>
        <Sidebar/>
        <div className='main'>
          <AppRouter/>
        </div>
      </Router>
    </div>
  )
}

export default App;
