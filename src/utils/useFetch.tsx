import { useEffect, useState } from "react";
import { Character, Info } from "./Types";

type CharcterType = Character | Info<Character[]>

export const useFetch = (url: string) => {
  const [data, setData] = useState<CharcterType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url).then(
      (result) => {
        if (!result.ok) {
          setError(`${result.status}`);
        }
        result.json().then((data) => setData(data));
        setLoading(false);
        setError(null);
      },
      (error) => {
        setLoading(false);
        setError(error.message);
      }
    );
  }, [url]);

  return { data, error, loading };
};
