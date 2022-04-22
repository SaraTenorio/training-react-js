import Book from './Book'

export default function BookList({ books, onDelete }) {
    if (books.length > 0) {
        return (
            <section className='grid'>
                {
                    books.map(book => (
                        <Book key={book.id} book={book} onDelete={onDelete} />
                    ))
                }
            </section>
        )
    }

    return (
        <div>Books loading...</div>
    )
}