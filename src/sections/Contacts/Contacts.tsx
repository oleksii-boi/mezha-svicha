import styles from './Contacts.module.scss';
import Viber from '../../assets/viber.svg';
import Mail from '../../assets/mail.svg';
import Location from '../../assets/location.svg';
import Watermelon from '../../assets/poly-watermelon.png';
import Carrot from '../../assets/poly-carrot.png';
import Potato from '../../assets/poly-potato.png';
import Squash from '../../assets/poly-squash.png';
import Beet from '../../assets/poly-beetroot.png';

export const Contacts = () => {
  return (
    <section className={styles.sectionContainer} id="contacts">
      <section className={styles.innerContainer}>
        <h1>КОНТАКТИ</h1>

        <p className={styles.legal}>
          ФГ "МЕЖА СВІЧА" <br />
          Код ЄДРПОУ: 45767010
        </p>

        <div className={styles.contactItem}>
          <img src={Viber} alt="Contact Icon" />
          <a href="tel:+380973108278">+380973108278</a>
        </div>
        <div className={styles.contactItem}>
          <img src={Mail} alt="Contact Icon" />
          <a href="mailto:mezha.svicha@gmail.com">mezha.svicha@gmail.com</a>
        </div>
        <div className={styles.contactItem}>
          <img src={Location} alt="Contact Icon" />
          <a href="https://maps.app.goo.gl/nZ2wMZM4SkLJ41Xc6" target="_blank">
            Львівська обл., Стрийський р-н, село Великі Дідушичі
          </a>
        </div>

        <img src={Beet} alt="Beetroot" className={styles.beet} />
        <img src={Potato} alt="Potato" className={styles.potato} />

        <img src={Watermelon} alt="Watermelon" className={styles.watermelon} />
        <img src={Carrot} alt="Carrot" className={styles.carrot} />
        <img src={Squash} alt="Squash" className={styles.squash} />
      </section>
    </section>
  );
};
