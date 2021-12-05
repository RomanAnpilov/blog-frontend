import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Home, Article} from './pages';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:id" element={<Article />} />
    </Routes>
  );
}

export default App;
