import { useState } from 'react';
import { data } from '../db';

const { bookables } = data;

export default function Bookables() {

    const [bookablesIndex, setBookablesIndex] = useState(0)
    const [group, setGroup] = useState("Rooms")
    const [hasDetails, setHasDetails] = useState(false)

    const bookablesInGroup = bookables.filter(b => b.group === group);
    const bookable = bookablesInGroup[bookablesIndex];

    //const group = "Rooms";

    //let bookablesIndex = 0;
    // const changeBookable = (index) => {
    //     bookablesIndex = index;
    //     console.log(bookablesIndex);
    // }

    const nextBookable = () => {
        //setBookablesIndex((bookablesIndex + 1) % bookablesInGroup.length)
        setBookablesIndex(currentState => (currentState + 1) % bookablesInGroup.length)
    }

    //const groups = bookables.map(i => i.group);
    const groups = [...new Set(bookables.map(i => i.group))]

    const changeGroup = ({ target: { value } }) => {
        setGroup(value);
        setBookablesIndex(0);
    }

    return (
        <>
            <section>
                <select value={group} onChange={changeGroup} >
                    {
                        groups.map((group, index) => (
                            <option key={index}>
                                {group}
                            </option>
                        ))
                    }
                </select>
                <ul className='bookables items-list-nav'>
                    {
                        bookablesInGroup.map((b, index) => (
                            <li key={b.id} className={index === bookablesIndex ? 'selected' : null} onClick={() => setBookablesIndex(index)}>
                                {b.title}
                            </li>
                        ))
                    }
                </ul>
                <button autoFocus onClick={nextBookable}>Next</button>
            </section>
            <section>
                <p>
                    <label htmlFor='details'>Show Details:</label>
                    <input
                        type="checkbox"
                        id="details"
                        checked={hasDetails}
                        onChange={(e) => setHasDetails(e.target.checked)}
                    />
                </p>
                {/* {conditional rendering} */}
                {
                    hasDetails && (
                        <article>
                            <h2>{bookable.title}</h2>
                            <p>{bookable.notes}</p>
                        </article>
                    )
                }
            </section>
        </>
    )
}