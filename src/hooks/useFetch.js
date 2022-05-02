import { useEffect, useState } from "react";
import getData from '../utils/api';

export default function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    let doUpdate = true;

    setStatus("loading");
    setData(undefined);
    setError(null);

    //getData(url)
    fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw Error("There was a problem fetching data.");
        }

        return resp.json();
      })
      .then(data => {
        if (doUpdate) {
          setData(data);
          setStatus("success");
        }
      })
      .catch(error => {
        if (doUpdate) {
          setError(error);
          setStatus("error");
        }
      });

    return () => doUpdate = false;
  }, [url]);

  return { data, status, error };
}