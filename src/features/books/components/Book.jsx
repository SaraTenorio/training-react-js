import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteBook } from '../booksSlice';

export default function Book(props) {

  const { id, title, author, imageUrl, alreadyRead } = props.book;

  const dispatch = useDispatch();

  return (
    <article>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <img src={`livros/${imageUrl}`} alt={title} />
      <p>Read: {alreadyRead ? '✅' : '❌'}</p>
      <button onClick={() => dispatch(deleteBook)}>Delete</button>
    </article>
  )
}