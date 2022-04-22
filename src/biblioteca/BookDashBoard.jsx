import React, { useEffect, useState } from 'react'
import BookList from './BookList';

export default function BookDashBoard() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch('http://localhost:3001/books/');
                let data = await res.json();
                setBooks(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    const handleDelete = (id) => {
        setBooks(books.filter(b => b.id !== id));
    }

    return (
        <div>
            <BookList books={books} onDelete={handleDelete} />
        </div>
    )
}