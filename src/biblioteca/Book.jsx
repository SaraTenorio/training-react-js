import React from 'react'

export default function Book(props) {
  const { book: { id, title, author, alreadyRead, imageUrl, imageUrlGr, description }, deleteBook } = props;

  return (
    <div className='grid-item'>
      <h4>{title}</h4>
      <h3>{author}</h3>

      <img alt="Cover" src={"livros/" + imageUrl} />

      <section>
        <label>Already read: </label>
        <input type="checkbox" checked={alreadyRead} disabled />
      </section>

      <button onClick={(id) => deleteBook(id)}>Delete</button>
    </div>
  )
}