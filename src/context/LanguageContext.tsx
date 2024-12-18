import { createContext, useState, ReactNode } from 'react';

interface LanguageContextProps {
    language: string;
    changeLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState({'English' : true,
        'Spanish' : false});

    const changeLanguage = (lang: string) => {
        setLanguage({ 'English': lang === 'English', 'Spanish': lang === 'Spanish' });
    };

    return (
        <LanguageContext.Provider value={{ language: language['English'] ? 'English' : 'Spanish', changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};