import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function MessageInput() {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch({
            type: 'ADD_MESSAGE',
            messages: value
        })

        setValue('');
    }

    return (
        <section>
            <input type='text' autoFocus value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </section>
    )
}