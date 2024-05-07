"use client";
import { useEffect, useState, useCallback } from "react";
import { fetchTextsByLanguage } from "./lib/data";

export default function FetchPage  ({ textId, language })  {
  const [text, setText] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const fetchedText = await fetchTextsByLanguage(textId, language);
      setText(fetchedText);
    } catch (error) {
      setError(error.message);
    }
  }, [textId, language, fetchTextsByLanguage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex ">
      <p>Data:</p>
      {text? (
        <p>{text}</p>
      ) : (
        error? (
          <p>Error: {error}</p>
        ) : (
          <p></p>
        )
      )}
    </div>
  );
};