// src/pages/Bookshelf.js
import React from "react";

const Bookshelf = ({ books }) => {
  return (
    <div className="grid grid-row-3 gap-2">
      <h1 className="row-span-1 flex justify-center mt-3 text-2xl underline font-semibold">
        My Bookshelf
      </h1>
      <div className="bookshelf-list row-span-2 flex justify-center">
        {books.map((book, index) => (
          <div key={index} className="bookshelf-book grid grid-row-2 gap-2">
            <div className="row-span-1">
              <div className="flex items-center">
                <h3 className="text-sm font-semibold flex items-center w-[80px]">
                  Book Title :{" "}
                </h3>
                <h3 className="text-sm w-[140px]">{book.title}</h3>
              </div>
              <div className="mt-2 flex items-center">
                <h3 className="text-sm font-semibold flex items-center w-[110px]">
                  Edition Count :{" "}
                </h3>
                <p className="">{book.edition_count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row-span-3 flex justify-center ">
        <a href="/" className="mt-3 text-xl font-semibold border-4 w-fit rounded-xl p-2 border-emerald-700 hover:bg-emerald-300">
          Back to Search
        </a>
      </div>
    </div>
  );
};

export default Bookshelf;
