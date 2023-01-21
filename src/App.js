import React, { useState } from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';

import CreationPage from './components/CreationPage.js';
import HomePage from './components/HomePage.js';
import ViewPost from './components/ViewPost.js';
import EditingPage from './components/EditingPage.js';

export default function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/posts/new" element={<CreationPage />} />
        <Route path="/posts/:id" element={<ViewPost />} />
        <Route path="/posts/edit/:id" element={<EditingPage />} />
      </Routes>
    </div>
  );
}
