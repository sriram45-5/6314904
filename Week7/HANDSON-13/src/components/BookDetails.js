import React from 'react';

const books = [
  { id: 1, bname: 'Master React', price: 670 },
  { id: 2, bname: 'Deep Dive Into Angular 11', price: 800 },
  { id: 3, bname: 'Mongo Essentials', price: 450 },
];

export default function BookDetails() {
  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
