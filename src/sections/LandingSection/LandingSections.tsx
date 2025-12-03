import LogoFull from '../../assets/logo-full.svg';
import PdfFile from '../../../public/Межа Свіча Пропозиція.pdf';
import styles from './LandingSections.module.scss';

export const LandingSections = () => {
  return (
    <section className={styles.sectionContainer}>
      <img
        src={LogoFull}
        className={styles.logo}
        alt="Межа Свіча - логотип локального фермерського господарства"
      />

      <a href={PdfFile} target="_blank" rel="noopener noreferrer" className={styles.button}>
        ЗАВАНТАЖИТИ ПРОПОЗИЦІЮ
      </a>
    </section>
  );
};
