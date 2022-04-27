import '../biblioteca02.css';

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import BookList from "./BookList";

export default function BookDashboard() {

  const dispatch = useDispatch();  

  useEffect(() => {
    (async function () {
      try {
        const resp = await fetch('http://localhost:3001/books/');
        const data = await resp.json();
        dispatch({
          type: "READ_BOOKS",
          payload: data.books,
        });
      } catch (error) {
        console.log('ocorreu um erro')
      }
    })(); // IIFE
  }, [])

  return (
    <div>
      <BookList />
    </div>
  )
}
