import { useEffect, useRef, useState } from 'react';
import { data } from '../../databases/db';

const { bookables } = data;

export default function Bookables() {

    const [bookablesIndex, setBookablesIndex] = useState(0)
    const [group, setGroup] = useState("Rooms")
    const [hasDetails, setHasDetails] = useState(false)

    const bookablesInGroup = bookables.filter(b => b.group === group);
    const bookable = bookablesInGroup[bookablesIndex];

    /* acrescentar apresentacao com useRef() e setInterval() - START */

    const timeRef = useRef(null);

    // useEffect(() => {
    //     timeRef.current = setInterval(() => {
    //         nextBookable();
    //     }, 2000);

    //     return stopPresentation;
    // }, [])

    function stopPresentation() {
        clearInterval(timeRef.current);
    }

    const nextBtnRef = useRef();

    const changeIndex = (i) => {
        setBookablesIndex(i);
        nextBtnRef.current.focus();
    }

    /* acrescentar apresentacao com useRef() e setInterval() - END */

    const nextBookable = () => {
        setBookablesIndex(currentState => (currentState + 1) % bookablesInGroup.length)
    }

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
                            <li key={b.id} className={index === bookablesIndex ? 'selected' : null} onClick={() => changeIndex(index)}>
                                {b.title}
                            </li>
                        ))
                    }
                </ul>
                <button autoFocus onClick={nextBookable} ref={nextBtnRef}>Next</button>
            </section>
            <section>
                {/* parar apresentacao automatica */}
                <p>
                    <button onClick={stopPresentation}>Stop Presentation</button>
                </p>
                <br />
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