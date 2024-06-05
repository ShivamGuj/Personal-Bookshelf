// src/components/BookCard.js
import React from 'react';

const BookCard = ({ book, onAdd }) => {
  return (
    <div className="book-card grid grid-row-2 gap-2">
      <div className='row-span-1'>
        <div className='flex items-center'>
            <h3 className='text-sm font-semibold flex items-center w-[80px]'>Book Title : </h3>
            <h3 className='text-sm w-[140px]'>{book.title}</h3>
        </div>
        <div className='mt-2 flex items-center'>
            <h3 className='text-sm font-semibold flex items-center w-[110px]'>Edition Count : </h3>
            <p className=''>{book.edition_count}</p>
        </div>
      </div>
      <button onClick={() => onAdd(book)} className='row-span-2 rounded-xl bg-emerald-700 hover:bg-emerald-500 w-fit h-fit p-2 text-white'>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
