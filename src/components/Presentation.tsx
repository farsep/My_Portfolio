import styles from '../styles/Presentation.module.css';

const Presentation = () => {
    const text = "Agradezco sinceramente su consideración. Esta beca es mucho más que una oportunidad educativa para mí; es un trampolín hacia un futuro mejor. A lo largo de mi vida, he enfrentado desafíos que me han fortalecido y me han enseñado a valorar cada oportunidad. Sé que la competencia es fuerte, pero mi pasión y mi compromiso me distinguen. Estoy listo para aprovechar al máximo esta beca y demostrar que soy un candidato excepcional. Estoy seguro de que esta experiencia me permitirá alcanzar mi máximo potencial y que mejor que explotar ese Potencial en Rusia. Muchas Gracias de Antemano, Arnie Farid les manda un saludo.";

    const words = text.split(' ');
    const chunks = [];
    for (let i = 0; i < words.length; i ++) {
        chunks.push(words.slice(i, i + 1).join(' '));
    }

    return (
        <div className={styles.presentation}>
            <div className={styles.presentation__container}>
                <div className={styles.presentation__subContainer}>
                    <h1 className={styles.presentation__title}>NO DEBES LEER DEBAJO!!!👇👇👇</h1>
                    <p className={styles.presentation__superDescription}>
                        {chunks.map((chunk, index) => (
                            <span key={index} className={styles.presentation__glowText}>{chunk} </span>
                        ))}
                    </p>
                </div>
                <div className={styles.presentation__imageContainer}>
                    <img className={styles.presentation__image} src='https://i.imgur.com/TDo0WB1.jpeg' alt='Presentation Image'/>
                </div>
            </div>
        </div>
    )
}

export default Presentation;