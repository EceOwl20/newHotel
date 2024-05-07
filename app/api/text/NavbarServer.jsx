import React, { useState, useEffect } from "react";
import { fetchTextsByLanguage } from "../../lib/data";

const NavbarServer = () => {
  const [language, setLanguage] = useState("en");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    fetchTexts("textId1", setText1);
    fetchTexts("textId2", setText2);
    fetchTexts("textId3", setText3);
  }, [language]);

  const fetchTexts = async (textId, setText) => {
    const fetchedTexts = await fetchTextsByLanguage(textId, language);
    setText(fetchedTexts);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <p>{text1}</p>
    </div>
  );
};

export default NavbarServer;
