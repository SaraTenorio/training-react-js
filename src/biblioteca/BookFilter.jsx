import React from 'react'

export default function BookFilter() {
    return (
        <section className='filters'>
            <h1>Filtros</h1>
            <article>
                <div>
                    <label for='filterRead'>Já Lidos</label>
                    <input type='checkbox' id='filterRead'></input>

                    <label for='filterNotRead'>Não Lidos</label>
                    <input type='checkbox' id='filterNotRead'></input>
                </div>
                <div>
                    <label for='filterTitle'>Search Title:</label>
                    <input type='text' id='filterTitle'></input>
                </div>
            </article>
        </section>
    )
}