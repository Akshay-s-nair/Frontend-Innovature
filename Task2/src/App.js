import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Beg from './Beg'
import Home from './Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Beg />} />
      <Route path="/Home" element={<Home />} />  {/* Adjust this to render the desired component */}
    </Routes>
  );
}

export default App;
