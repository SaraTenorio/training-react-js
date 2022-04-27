import React from 'react'
import { useDispatch } from 'react-redux';

export default function Book({ book }) {

  const { id, title, author, alreadyRead, description, imageUrl, imageurlGr } = book;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: "DELETE_MESSAGE",
      id,
    })
  }

  return (
    <article>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <img src={'livros/' + imageUrl} />
      <p>Already Read: {alreadyRead ? "lido" : "Nao Lido"}</p>
      <button onClick={handleDelete}>DELETE</button>
    </article>
  )
}
