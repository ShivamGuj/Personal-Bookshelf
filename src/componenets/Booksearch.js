// src/components/BookSearch.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './Bookcard';

const BookSearch = ({ onAdd }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const fetchBooks = async (searchQuery) => {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`);
    setBooks(response.data.docs);
  };

  useEffect(() => {
    // Fetch default books when the component mounts
    fetchBooks('bestsellers');
  }, []);

  useEffect(() => {
    if (query) {
      fetchBooks(query);
    }
  }, [query]);

  return (
    <div className=''>
      <input
        type="text"
        placeholder="Search for books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='border-2 border-gray-300 rounded-md p-1 flex justify-center w-1/2 mx-auto mt-3'
      />
      <div className="book-list flex justify-center">
        {books.map((book) => (
          <BookCard key={book.key} book={book} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
