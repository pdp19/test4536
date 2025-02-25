import React from 'react';
import BixbitePage from './components/BixbitePage'
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<BixbitePage />} />
      </Routes>
  );
};

export default App;