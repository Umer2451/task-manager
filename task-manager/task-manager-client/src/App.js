import React, { useEffect, useState } from 'react';
import './App.css';
import useAPI from './hooks/fetchHook';
import Login from './pages/login';

function App() {
  return (
    <Login/>
  );
}

export default App;
