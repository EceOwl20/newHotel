import React, { useState, useEffect } from "react";
import { fetchTextsByLanguage } from "../../lib/data";
import TextFetcher from "../TextFetcher";

const NavbarServer = () => {
  const [texts, setTexts] = useState({});

  useEffect(() => {
    fetchTexts();
  }, []);

  const fetchTexts = async () => {
    const textIds = [1, 2, 3, 4]; // Define text IDs to fetch
    const languages = ["EN"]; // Define languages to fetch
    const fetchedTexts = {};

    for (const textId of textIds) {
      fetchedTexts[textId] = {};
      for (const language of languages) {
        fetchedTexts[textId][language] =
          await TextFetcher.fetchTextByIdAndLanguage(textId, language);
      }
    }

    setTexts(fetchedTexts);
  };

  return (
    <div>
      <p className="bg-black ">{texts[1]?.EN}</p>
    </div>
  );
};

export default NavbarServer;
