
// lib/languageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchTextsByLanguage } from './data';  // fetchTextsByLanguage fonksiyonunun bulunduğu yeri doğru yola ayarlayın

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  // Dil değiştiğinde veritabanından çevirileri çek
  useEffect(() => {
    async function loadTranslations() {
      const fetchedTranslations = await fetchTextsByLanguage(language);
      setTranslations(fetchedTranslations);
    }

    loadTranslations();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}
