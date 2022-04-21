import React, { useEffect, useState } from 'react'
import Book from './Book'

export default function BookList() {
    const [books, setbooks] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch('http://localhost:3001/books/');
                let data = await res.json();
                setbooks(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    const deleteBook = (id) => {
        const updateBooks = books.map(book => {
            if (book.id != id) {
                return book;
            }
        })

        setbooks(updateBooks);
    }

    if (books.length > 0) {
        return (
            <>
                <h2 className='title'>Biblioteca de JavaScript</h2>

                <div className='grid-container'>
                    {
                        books.map(book => (
                            <Book key={book.id} book={book} deleteBook={deleteBook} />
                        ))
                    }
                </div>
            </>
        )
    }

    return (
        <div>Books loading...</div>
    )
}