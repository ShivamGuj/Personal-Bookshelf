// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bookshelf from './pages/Bookshelf';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBooks);
  }, []);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onAdd={addToBookshelf} />} />
        <Route path="/bookshelf" element={<Bookshelf books={bookshelf} />} />
      </Routes>
    </Router>
  );
};

export default App;


