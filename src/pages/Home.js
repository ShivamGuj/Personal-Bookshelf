// src/pages/Home.js
import React from 'react';
import BookSearch from '../componenets/Booksearch';

const Home = ({ onAdd }) => {
  return (
    <div className=' grid grid-row-3 gap-2'>
      <h1 className='row-span-1 flex justify-center mt-3 text-2xl underline font-semibold'>Book Search</h1>
      <BookSearch onAdd={onAdd} className='row-span-2 flex justify-center'/>
      <div className='row-span-3 flex justify-center '>
        <a href="/bookshelf" className='mt-3 text-xl font-semibold border-4 w-fit rounded-xl p-2 border-emerald-700 hover:bg-emerald-300 '>Go to My Bookshelf</a>
      </div>
    </div>
  );
};

export default Home;
