import { createContext, useState, ReactNode } from 'react';

interface LanguageContextProps {
    language: string;
    changeLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState('English');

    const changeLanguage = (language: string) => {
        setLanguage(language);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};