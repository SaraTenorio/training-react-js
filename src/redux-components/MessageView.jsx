import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function MessageView() {

    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();

    const handleClick = (index) => {
        dispatch({
            type: 'DELETE_MESSAGE',
            index: index
        })
    }

    return (
        <section>
            {
                messages.map((msg, i) => (
                    <h4 key={i} onClick={(i) => handleClick(i)}>{msg}</h4>
                ))
            }
        </section>
    )
}