import React from 'react'
import Book from './Book'

export default function BookList(props) {

  const {books, onDelete} = props;

  return (
    <section className='grid'>
    {
        books.map( (b, i) => (
            <Book key={i} book={b} onDelete={onDelete} />
        ))
    }
    </section>
  )
}
