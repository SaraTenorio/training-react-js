import { useEffect, useState } from 'react'
/* import {data} from '../data' */
import BookList from './BookList'

export default function BookDashboard() {

    const [books, setBooks] = useState([])

    useEffect(() => {

      fetch('http://localhost:3001/books')
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(err=>console.log('ocorreu um erro'));

    }, []);
    
   
    const handleDelete = (id) => {
        setBooks( books.filter( b => b.id !== id));
    }

  return (
        <BookList books={books} onDelete={handleDelete} />
  )
}
