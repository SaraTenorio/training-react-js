import React from 'react'

export default function Book(props) {
  const { id, title, author, alreadyRead, imageUrl, imageUrlGr, description, deleteBook } = props.book;

  const handleDelete = () => {
    props.onDelete(id);
  }

  return (
    <article>
      <h1>{title}</h1>
      <h2>{author}</h2>

      <img src={`livros/${imageUrl}`} alt={title} />

      <section>
        <label>Already read: </label>
        <input type="checkbox" checked={alreadyRead} disabled />
      </section>

      <button onClick={(id) => handleDelete(id)}>Delete</button>
    </article>
  )
}