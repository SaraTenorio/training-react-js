import { useSelector } from 'react-redux'
import Book from './Book'

export default function BookList() {
  const { books } = useSelector(state => state.books);

  return (
    <section className='grid'>
      {
        books.map((b, i) => (
          <Book key={i} book={b} />
        ))
      }
    </section>
  )
}