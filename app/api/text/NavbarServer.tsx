import React, { useState, useEffect } from "react";
import { fetchTextsByLanguage } from "../../data";


const NavbarServer = () => {

    const [language, setLanguage] = useState('en');
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        fetchTexts();
    }, [language]);

    const fetchTexts = async () => {
        const fetchedTexts = await fetchTextsByLanguage(language);
        setTexts(fetchedTexts);
    };


    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    }


  return (
    <div>
      
    </div>
  )
}

export default NavbarServer
