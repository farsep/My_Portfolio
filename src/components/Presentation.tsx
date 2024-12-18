import styles from '../styles/Presentation.module.css';
import { LanguageContext } from '../context/LanguageContext.tsx';
import { useContext } from 'react';

const Presentation = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('LanguageContext must be used within a LanguageProvider');
    }
    const { language } = context;

    const text = "Agradezco sinceramente su consideración. Esta beca es mucho más que una oportunidad educativa para mí; es un trampolín hacia un futuro mejor. A lo largo de mi vida, he enfrentado desafíos que me han fortalecido y me han enseñado a valorar cada oportunidad. Sé que la competencia es fuerte, pero mi pasión y mi compromiso me distinguen. Estoy listo para aprovechar al máximo esta beca y demostrar que soy un candidato excepcional. Estoy seguro de que esta experiencia me permitirá alcanzar mi máximo potencial y que mejor que explotar ese Potencial en Rusia. Muchas Gracias de Antemano, Arnie Farid les manda un saludo.";
    const textEng = "I sincerely appreciate your consideration. This scholarship is much more than an educational opportunity for me; it is a stepping stone toward a better future. Throughout my life, I have faced challenges that have strengthened me and taught me to value every opportunity. I know the competition is tough, but my passion and commitment set me apart. I am ready to make the most of this scholarship and prove that I am an exceptional candidate. I am confident that this experience will allow me to reach my full potential, and what better place to unleash that potential than in Russia. Thank you very much in advance, Arnie Farid sends you his regards.";

    const words = text.split(' ');
    const wordsEng = textEng.split(' ');
    const chunks = [];
    const chunksEng = [];
    for (let i = 0; i < words.length; i++) {
        chunks.push(words.slice(i, i + 1).join(' '));
    }
    for (let i = 0; i < wordsEng.length; i++) {
        chunksEng.push(wordsEng.slice(i, i + 1).join(' '));
    }

    return (
        <div className={styles.presentation}>
            <div className={styles.presentation__container}>
                <div className={styles.presentation__subContainer}>
                    <h1 className={styles.presentation__title}>{language === 'English' ? 'NO DEBES LEER DEBAJO!!!👇👇👇' : `You Mustn't read Below!!!👇👇👇`}</h1>
                    <p className={styles.presentation__superDescription}>
                        {language === 'English' ? chunksEng.map((chunk, index) => (
                            <span key={index} className={styles.presentation__glowText}>{chunk} </span>
                        )) : chunks.map((chunk, index) => (
                            <span key={index} className={styles.presentation__glowText}>{chunk} </span>
                        ))}
                    </p>
                </div>
                <div className={styles.presentation__imageContainer}>
                    <img className={styles.presentation__image} src='https://i.imgur.com/TDo0WB1.jpeg' alt='Presentation Image' />
                </div>
            </div>
        </div>
    );
}

export default Presentation;