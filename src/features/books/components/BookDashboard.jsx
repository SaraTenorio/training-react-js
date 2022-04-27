import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getBooks } from '../booksSlice';
import BookList from './BookList'

export default function BookDashboard() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      <BookList />
    </div>
  )
}