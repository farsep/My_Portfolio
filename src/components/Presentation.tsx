import styles from '../styles/Presentation.module.css';
import { LanguageContext } from '../context/LanguageContext.tsx';
import { useContext } from 'react';

const Presentation = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('LanguageContext must be used within a LanguageProvider');
    }
    const { language } = context;

    const text = "Agradezco sinceramente su consideración. Esta beca es mucho más que una oportunidad educativa para mí; es un peldaño hacia un futuro mejor. A lo largo de mi vida, he enfrentado desafíos que me han fortalecido y me han enseñado a valorar cada oportunidad. Sé que la competencia es dura, pero mi pasión y compromiso me distinguen. Estoy listo para aprovechar al máximo esta beca y demostrar que soy un candidato excepcional. Estoy seguro de que esta experiencia me permitirá alcanzar mi máximo potencial, y qué mejor lugar para desatar ese potencial que en Rusia. Muchas gracias de antemano, Arnie Farid les envía un cordial saludo.";
    const textEng = "I sincerely appreciate your consideration. This scholarship is much more than an educational opportunity for me; it is a stepping stone toward a better future. Throughout my life, I have faced challenges that have strengthened me and taught me to value every opportunity. I know the competition is tough, but my passion and commitment set me apart. I am ready to make the most of this scholarship and prove that I am an exceptional candidate. I am confident that this experience will allow me to reach my full potential, and what better place to unleash that potential than in Russia. Thank you very much in advance, Arnie Farid sends you his regards.";
    const textRus = "Я искренне благодарю за ваше внимание. Эта стипендия для меня — гораздо больше, чем образовательная возможность; это шаг к лучшему будущему. На протяжении всей своей жизни я сталкивался с трудностями, которые укрепили меня и научили ценить каждую возможность. Я понимаю, что конкуренция велика, но моя страсть и приверженность отличают меня. Я готов максимально использовать эту стипендию и показать, что я исключительный кандидат. Я уверен, что этот опыт позволит мне раскрыть свой максимальный потенциал, и какое лучшее место для этого, как не Россия. Заранее благодарю, с уважением, Арни Фарид."

    const words = text.split(' ');
    const wordsEng = textEng.split(' ');
    const wordsRus = textRus.split(' ');
    const chunks = [];
    const chunksEng = [];
    const chunksRus = [];
    for (let i = 0; i < words.length; i++) {
        chunks.push(words.slice(i, i + 1).join(' '));
    }
    for (let i = 0; i < wordsEng.length; i++) {
        chunksEng.push(wordsEng.slice(i, i + 1).join(' '));
    }
    for (let i = 0; i < wordsRus.length; i++) {
        chunksRus.push(wordsRus.slice(i, i + 1).join(' '));
    }

    return (
        <div className={styles.presentation}>
            <div className={styles.presentation__container}>
                <div className={styles.presentation__subContainer}>
                    <h1 className={styles.presentation__title}>
                        {(() => {
                            switch (language) {
                                case 'English':
                                    return 'Dear Committee';
                                case 'Spanish':
                                    return 'Estimado Comité';
                                case 'Russian':
                                    return 'Уважаемый комитет';
                            }
                        })()}
                    </h1>
                    <p className={styles.presentation__superDescription}>
                        {(() => {
                            switch (language) {
                                case 'English':
                                    return chunksEng.map((chunk, index) => (
                                        <span key={index} className={styles.presentation__glowText}>{chunk} </span>
                                    ));
                                case 'Spanish':
                                    return chunks.map((chunk, index) => (
                                        <span key={index} className={styles.presentation__glowText}>{chunk} </span>
                                    ));
                                case 'Russian':
                                    return chunksRus.map((chunk, index) => (
                                        <span key={index} className={styles.presentation__glowText}>{chunk} </span>
                                    ));
                                default:
                                    return null;
                            }
                        })()}
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