import React, { createContext, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

// Create a context for managing language
const LanguageContext = createContext();

// Language provider component
export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // Function to change language
  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    if (i18n.changeLanguage) {
      i18n.changeLanguage(lang).catch((err) => console.error('Failed to change language', err));
    } else {
      console.error('i18n.changeLanguage is not available');
    }
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to access language context
export function useLanguage() {
  return useContext(LanguageContext);
}
