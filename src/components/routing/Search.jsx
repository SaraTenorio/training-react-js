import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Search() {

    let [searchParams] = useSearchParams();

    return (
        <div className='search'>
            <p>Search Params</p>
            <h2>URL string: {searchParams.get('nome')}</h2>
        </div>
    )
}