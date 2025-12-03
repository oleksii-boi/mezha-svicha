import LogoFull from '../../assets/logo-full.svg';
import PdfFile from '../../assets/Межа Свіча Пропозиція.pdf';
import styles from './LandingSections.module.scss';

export const LandingSections = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PdfFile;
    link.download = 'Межа Свіча Пропозиція.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.sectionContainer}>
      <img
        src={LogoFull}
        className={styles.logo}
        alt="Межа Свіча - логотип локального фермерського господарства"
      />

      <button className={styles.button} onClick={handleDownload}>
        ЗАВАНТАЖИТИ ПРОПОЗИЦІЮ
      </button>
    </section>
  );
};
