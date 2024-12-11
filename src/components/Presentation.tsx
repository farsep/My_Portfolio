import BackgroundParticles from "./BackgroundParticles.tsx";
import styles from '../styles/Presentation.module.css';

const Presentation = () => {


    return (
        <div className={styles.presentation} >
            {/*<BackgroundParticles/>*/}
            <div className={styles.presentation__container}>
                <div className={styles.presentation__imagecontainer}>
                    <img src='https://i.imgur.com/mVxvzDa.jpeg' alt='Presentation Image'/>
                </div>
                <div className={styles.presentation__subcontainer}>
                    <h1 className={styles.presentation__title}>NO DEBES LEER DEBAJO!!????</h1>
                    <p className={styles.presentation__description}>Front-end Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Presentation