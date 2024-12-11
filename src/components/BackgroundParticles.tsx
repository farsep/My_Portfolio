import styles from '../styles/BackgroundParticles.module.css';

const BackgroundParticles = () => {
    return (
        <ul className={styles.background}>
            {Array.from({ length: 46 }).map((_, index) => (
                <li key={index}></li>
            ))}
        </ul>
    );
};

export default BackgroundParticles;