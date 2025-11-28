import styles from './AboutUs.module.scss';
import PotatoBucket from '../../assets/potato-bucket.png';

const data = [
  {
    label: 'Ціль',
    desc: ' — через сродну працю побудувати нову модель фермерської діяльності: створювати якісну продукцію, підтримувати вітчизняну продовольчу безпеку, відновлювати гідне життя після служби.',
  },
  {
    label: 'Місія',
    desc: ' — вирощувати корисне для людей, працюючи з повагою до спільноти, природи та досвіду, здобутого в час захисту держави.',
  },
  {
    label: 'Цінності',
    desc: ' — прозорість, відповідальність, локальність, людиноцентричність.',
  },
  {
    label: 'Цінність, яку створюємо:',
    desc: ' свіжість, гнучкість під нішеву потребу, клієнтоорієнтована логістика, прозорість в документообігу, причетність та відповідальність (щодо ветеранської справи).',
  },
];

export const AboutUs = () => {
  return (
    <section className={styles.sectionContainer} id="about-us">
      <section className={styles.headerSection}>
        <h1>Про нас</h1>
        <p>
          Межа Свіча — локальне фермерське господарство, що вирощує овочеві коренеплоди, засноване
          ветеранами.
        </p>
      </section>

      <img src={PotatoBucket} className={styles.potatoImage} />

      <section className={styles.bulletPoints}>
        {data.map((item, index) => (
          <p key={index}>
            <strong>{item.label}</strong>
            {item.desc}
          </p>
        ))}
      </section>
    </section>
  );
};
