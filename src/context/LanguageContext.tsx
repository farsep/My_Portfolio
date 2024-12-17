import React, { createContext, useState, ReactNode } from 'react';

interface LanguageContextProps {
    language: string;
    changeLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [languageIn, setLanguageIn] = useState({'English' : true,
        'Spanish' : false});

    const changeLanguage = (lang: string) => {
        setLanguageIn({ 'English': lang === 'English', 'Spanish': lang === 'Spanish' });
    };

    return (
        <LanguageContext.Provider value={{ language: languageIn['English'] ? 'English' : 'Spanish', changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};