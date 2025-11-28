import LogoFull from '../../assets/logo-full.svg';
import styles from './LandingSections.module.scss';

export const LandingSections = () => {
  return (
    <section className={styles.sectionContainer}>
      <img
        src={LogoFull}
        className={styles.logo}
        alt="Межа Свіча - логотип локального фермерського господарства"
      />

      <button className={styles.button}>ЗАВАНТАЖИТИ ПРОПОЗИЦІЮ</button>
    </section>
  );
};
