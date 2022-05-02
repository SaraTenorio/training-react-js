
import '../App.css';
import { getAnagrams, getDistinct } from "./anagramsFunctions";
import { useState, useMemo } from "react";

export default function App() {

  const [sourceText, setSourceText] = useState("ball");
  const [useDistinct, setUseDistinct] = useState(false);
  const [showAnagrams, setShowAnagrams] = useState(false);

  // const anagrams = getAnagrams(sourceText);
  // const distinct = getDistinct(anagrams);

  const anagrams = useMemo(
    () => getAnagrams(sourceText),
    [sourceText]
  );

  const distinct = useMemo(
    () => getDistinct(anagrams),
    [anagrams]
  );

  return (
    <div className="App">
      <h1>Anagrams</h1>
      <label htmlFor="txtPhrase">Enter some text...</label>
      <input
        type="text"
        value={sourceText}
        onChange={e => setSourceText(e.target.value.slice(0, 10))}
      />
      <div className="count">
        {useDistinct ? (
          <p>
            There are {distinct.length} distinct anagrams.
          </p>
        ) : (
          <p>
            There are {anagrams.length} anagrams of "{sourceText}".
          </p>
        )}
      </div>

      <p>
        <label>
          <input
            type="checkbox"
            checked={useDistinct}
            onChange={() => setUseDistinct(s => !s)}
          />
          Distinct
        </label>
      </p>
      <p>
        <label>
          <input
            type="checkbox"
            checked={showAnagrams}
            onChange={() => setShowAnagrams(s => !s)}
          />
          Show
        </label>
      </p>

      {useDistinct && (showAnagrams && (
        <p className="anagrams">
          {distinct.map(a => (
            <span key={a}>{a}</span>
          ))}
        </p>
      ))}

      {useDistinct || (showAnagrams && (
        <p className="anagrams">
          {anagrams.map(a => (
            <span key={a}>{a}</span>
          ))}
        </p>
      ))}

    </div>
  );
}