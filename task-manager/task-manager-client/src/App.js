import React, { useEffect, useState } from 'react';
import './App.css';
import useAPI from './hooks/fetchHook';
import Login from './pages/login';

function App() {
  const { data, error } = useAPI('http://localhost:8000/api/getAll');
  return (
    <Login/>
  );
}

export default App;
